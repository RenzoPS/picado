import type { ReactNode } from 'react'
import { Icono, type NombreIcono } from './Iconos'
import { Remaches } from './ui'
import { useRodillo } from './movimiento'

/**
 * Ficha: la unidad de contenido de esta página. Un ícono grande y un nombre
 * corto. Reemplaza al par título + párrafo, porque en un cartel de cancha las
 * cosas se nombran, no se explican.
 */
export function Ficha({
  icono,
  titulo,
  tono = 'deep',
  className = '',
}: {
  icono: NombreIcono
  titulo: string
  tono?: 'deep' | 'senal' | 'chapa' | 'contorno'
  className?: string
}) {
  const TONOS = {
    deep: 'bg-cancha-deep text-cal sombra-dura',
    senal: 'bg-senal text-sombra sombra-dura',
    chapa: 'bg-chapa text-sombra sombra-dura',
    contorno: 'border-[3px] border-dashed border-cal/45 text-cal',
  }

  return (
    <div
      className={`ficha ${TONOS[tono]} flex h-full flex-col justify-between gap-6 p-6 lg:p-7 ${className}`}
    >
      {tono !== 'contorno' && <Remaches />}
      <Icono
        nombre={icono}
        className={`icono-vivo size-11 lg:size-14 ${
          tono === 'deep' || tono === 'contorno' ? 'text-senal' : 'text-sombra'
        }`}
      />
      <p className="marcador text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[0.95]">{titulo}</p>
    </div>
  )
}

/** Las tres respuestas, cada una con su ícono y su color semántico. */
const RESPUESTAS = [
  { icono: 'voy' as NombreIcono, texto: 'Voy', tono: 'bg-senal text-sombra' },
  { icono: 'noVoy' as NombreIcono, texto: 'No voy', tono: 'bg-oxido text-cal' },
  { icono: 'noSe' as NombreIcono, texto: 'No sé', tono: 'bg-chapa text-sombra' },
]

/**
 * La pregunta del sábado, que es el corazón del producto y por eso no entra en
 * una ficha común: el amarillo queda para la pregunta —que es lo que manda— y
 * cada respuesta se va con su propio color, suelta sobre el campo.
 */
export function FichaPregunta({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3.5 ${className}`}>
      <div className="ficha sombra-dura flex items-center gap-4 bg-senal px-6 py-4 text-sombra">
        <Remaches />
        <Icono nombre="pelota" className="icono-vivo size-8 shrink-0 lg:size-10" />
        <p className="font-display text-[clamp(1.75rem,3.2vw,2.25rem)] leading-none">¿VAS?</p>
      </div>

      <ul className="grid grid-cols-3 gap-2.5">
        {RESPUESTAS.map((r) => (
          <li
            key={r.texto}
            className={`${r.tono} ficha sombra-dura flex flex-col items-center justify-center gap-2.5 rounded-plate px-2 py-4`}
          >
            <Icono nombre={r.icono} className="icono-vivo size-7 lg:size-8" />
            <span className="marcador text-center text-[1.0625rem] leading-none">{r.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Envoltorio que pinta su contenido con el rodillo cuando entra en pantalla.
 * `retraso` escalona una lista; el total se mantiene corto a propósito.
 *
 * El contenido es visible por defecto y el recorte lo agrega el hook antes del
 * primer pintado: si el JS no corre o el observer nunca dispara, la ficha se ve
 * igual. Una animación no puede ser la condición para que exista el contenido.
 */
export function Rodillo({
  children,
  retraso = 0,
  className = '',
}: {
  children: ReactNode
  retraso?: number
  className?: string
}) {
  const { ref, estado } = useRodillo<HTMLDivElement>()
  const clases =
    estado === 'esperando' ? 'rodillo' : estado === 'pintado' ? 'rodillo rodillo-pintado' : ''

  // El observado y el recortado son elementos distintos a propósito: un
  // elemento con clip-path de ancho cero le reporta al IntersectionObserver un
  // área de 0, así que nunca se lo considera visible y jamás se destaparía.
  return (
    <div ref={ref} className={className}>
      <div
        className={`h-full ${clases}`}
        style={estado === 'inicial' ? undefined : { transitionDelay: `${retraso}ms` }}
      >
        {children}
      </div>
    </div>
  )
}
