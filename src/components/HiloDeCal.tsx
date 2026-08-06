import { useEffect, useRef, useState } from 'react'

/**
 * La línea de cal de la cancha, pintada de arriba abajo mientras se baja.
 * Es el único movimiento autorado de la página: un trazo continuo que arranca
 * en la línea de fondo del primer viewport, cruza cada sección y termina
 * clavado en la lista de espera del cierre.
 *
 * El trazo se dibuja en coordenadas de página reales, no en un viewBox
 * deformado: con preserveAspectRatio="none" el dasharray se mide en unidades
 * del viewBox mientras el trazo se pinta en píxeles, y la línea se rompe en
 * fragmentos sueltos.
 */

/** Fracciones del ancho por donde pasa el trazo, de arriba abajo. */
const CURSO_DESKTOP = [0.2, 0.78, 0.3, 0.72, 0.26, 0.55]
// En mobile el hilo se endereza contra el margen: el contenido arranca a 20px,
// así que el trazo tiene que quedar por fuera para no cruzar el texto.
const CURSO_MOBILE = [0.022, 0.038, 0.018, 0.034, 0.02, 0.03]

/** Curva vertical entre dos puntos: tangentes verticales, sin picos. */
const curva = (puntos: Array<[number, number]>) =>
  puntos
    .map(([x, y], i) => {
      if (i === 0) return `M ${x.toFixed(1)} ${y.toFixed(1)}`
      const [px, py] = puntos[i - 1]
      const medio = (py + y) / 2
      return `C ${px.toFixed(1)} ${medio.toFixed(1)}, ${x.toFixed(1)} ${medio.toFixed(1)}, ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')

export function HiloDeCal() {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [caja, setCaja] = useState({ w: 0, h: 0 })
  const [trazo, setTrazo] = useState('')

  // Recalcula el recorrido cuando cambia el tamaño de la página.
  useEffect(() => {
    const contenedor = svgRef.current?.parentElement
    if (!contenedor) return

    const trazar = () => {
      const caja = contenedor.getBoundingClientRect()
      const w = caja.width
      const h = contenedor.scrollHeight
      if (w === 0 || h === 0) return

      const desktop = window.matchMedia('(min-width: 768px)').matches
      const curso = desktop ? CURSO_DESKTOP : CURSO_MOBILE

      // El hilo nace en la línea de fondo del hero y muere en la lista de espera.
      const rel = (el: Element | null, alCentro = false) => {
        if (!el) return null
        const r = el.getBoundingClientRect()
        return {
          x: r.left - caja.left + r.width / 2,
          y: r.top - caja.top + window.scrollY + (alCentro ? r.height / 2 : 0),
        }
      }
      const inicio = rel(contenedor.querySelector('[data-hilo-inicio]'))
      // Termina clavado en el botón; si el form ya se envió, en su lugar.
      const anclaFin = contenedor.querySelector('[data-hilo-fin]')
      const fin = rel(anclaFin?.querySelector('button') ?? anclaFin, true)

      const desde = inicio ? { x: desktop ? w * 0.5 : w * curso[0], y: inicio.y } : { x: w * 0.5, y: 0 }
      const hasta = fin ? { x: fin.x, y: fin.y } : { x: w * 0.5, y: h }

      const tramo = (hasta.y - desde.y) / (curso.length + 1)
      const puntos: Array<[number, number]> = [
        [desde.x, desde.y],
        ...curso.map((f, i) => [w * f, desde.y + tramo * (i + 1)] as [number, number]),
        [hasta.x, hasta.y],
      ]

      setCaja({ w, h })
      setTrazo(curva(puntos))
    }

    trazar()
    const ro = new ResizeObserver(trazar)
    ro.observe(contenedor)
    window.addEventListener('resize', trazar)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', trazar)
    }
  }, [])

  // Pinta el trazo según el avance del scroll.
  useEffect(() => {
    const path = pathRef.current
    if (!path || !trazo) return

    const largo = path.getTotalLength()
    path.style.strokeDasharray = `${largo}`

    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)')
    // Ya entra pintado en el primer viewport: la línea existe antes del scroll.
    const ARRANQUE = 0.08

    const pintar = () => {
      const recorrible = document.documentElement.scrollHeight - window.innerHeight
      const bruto = recorrible > 0 ? Math.min(1, Math.max(0, window.scrollY / recorrible)) : 1
      const avance = sinMovimiento.matches ? 1 : ARRANQUE + (1 - ARRANQUE) * bruto
      path.style.strokeDashoffset = `${largo * (1 - avance)}`
    }

    let pendiente = false
    const alScrollear = () => {
      if (pendiente) return
      pendiente = true
      requestAnimationFrame(() => {
        pintar()
        pendiente = false
      })
    }

    pintar()
    window.addEventListener('scroll', alScrollear, { passive: true })
    sinMovimiento.addEventListener('change', pintar)
    return () => {
      window.removeEventListener('scroll', alScrollear)
      sinMovimiento.removeEventListener('change', pintar)
    }
  }, [trazo])

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox={`0 0 ${caja.w || 1} ${caja.h || 1}`}
      width={caja.w || undefined}
      height={caja.h || undefined}
      aria-hidden="true"
      focusable="false"
    >
      <path
        ref={pathRef}
        d={trazo}
        fill="none"
        stroke="var(--color-cal)"
        strokeWidth={6}
        strokeLinecap="round"
        opacity={0.9}
      />
    </svg>
  )
}
