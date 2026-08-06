import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/**
 * Los hooks llevan el prefijo `use` a la fuerza: es lo que la regla
 * rules-of-hooks necesita para poder verificarlos. El resto del código sigue
 * en castellano.
 */

const SIN_MOVIMIENTO = '(prefers-reduced-motion: reduce)'

/** 'inicial' = visible sin tocar; 'esperando' = recortado; 'pintado' = abierto. */
export type EstadoRodillo = 'inicial' | 'esperando' | 'pintado'

/**
 * Entrada de rodillo: el contenido se descubre de izquierda a derecha, como
 * una pasada de pintura. Es la única gramática de aparición de la página.
 *
 * El recorte se agrega en un layout effect, antes del primer pintado del
 * navegador: así nunca hay un parpadeo, y si el JS no corre el contenido queda
 * visible en lugar de desaparecer. Lo que ya está en pantalla al montar no se
 * anima: nadie tiene que esperar una animación para leer lo que ya está ahí.
 */
export function useRodillo<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [estado, setEstado] = useState<EstadoRodillo>('inicial')

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia(SIN_MOVIMIENTO).matches) return

    const caja = el.getBoundingClientRect()
    const yaVisible = caja.top < window.innerHeight * 0.9 && caja.bottom > 0
    if (yaVisible) return

    setEstado('esperando')

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEstado('pintado')
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, estado }
}

/**
 * El momento focal: la cuenta que llega a diez. El número arranca en el mínimo
 * y baja hasta los que faltan de verdad. Sale del mecanismo del producto, no
 * es una entrada genérica.
 */
export function useCuenta(destino: number, desde: number, duracion = 900) {
  const [valor, setValor] = useState(destino)

  useEffect(() => {
    if (window.matchMedia(SIN_MOVIMIENTO).matches) return

    let raf = 0
    let inicio: number | null = null
    setValor(desde)

    const paso = (t: number) => {
      if (inicio === null) inicio = t
      const avance = Math.min(1, (t - inicio) / duracion)
      // Desaceleración exponencial: arranca a la vista, frena en el número.
      const suave = 1 - Math.pow(1 - avance, 3)
      setValor(Math.round(desde + (destino - desde) * suave))
      if (avance < 1) raf = requestAnimationFrame(paso)
    }
    raf = requestAnimationFrame(paso)
    return () => cancelAnimationFrame(raf)
  }, [destino, desde, duracion])

  return valor
}
