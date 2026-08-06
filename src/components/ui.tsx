import type { ReactNode } from 'react'
import type { Estado } from '../data'
import { ETIQUETA_ESTADO, ICONO_ESTADO } from '../data'
import { Icono } from './Iconos'

/** Los cuatro remaches que atornillan una placa al campo. */
export function Remaches() {
  return (
    <span aria-hidden="true">
      {[
        'left-2.5 top-2.5',
        'right-2.5 top-2.5',
        'left-2.5 bottom-2.5',
        'right-2.5 bottom-2.5',
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute ${pos} size-2.5 rounded-full bg-chapa shadow-[1px_1px_0_var(--color-sombra-apoyo)]`}
        />
      ))}
    </span>
  )
}

type PlacaProps = {
  children: ReactNode
  tono?: 'deep' | 'senal' | 'chapa' | 'oxido'
  className?: string
  remaches?: boolean
}

const TONOS: Record<NonNullable<PlacaProps['tono']>, string> = {
  deep: 'bg-cancha-deep text-cal',
  senal: 'bg-senal text-sombra',
  chapa: 'bg-chapa text-sombra',
  oxido: 'bg-oxido text-cal',
}

/** Placa de chapa apoyada sobre el campo. La unidad de contenido. */
export function Placa({ children, tono = 'deep', className = '', remaches = true }: PlacaProps) {
  return (
    <div className={`placa ${TONOS[tono]} ${className}`}>
      {remaches && <Remaches />}
      {children}
    </div>
  )
}

/** Flecha maciza de señalética vial. Nada de íconos de línea. */
export function Flecha({
  direccion = 'abajo',
  className = '',
}: {
  direccion?: 'abajo' | 'derecha'
  className?: string
}) {
  const rotacion = direccion === 'derecha' ? '-rotate-90' : ''
  return (
    <svg
      viewBox="0 0 48 64"
      className={`${rotacion} ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 0h12v34h14L24 64 4 34h14z" />
    </svg>
  )
}

const ESTADO_TONO: Record<Estado, string> = {
  voy: 'bg-senal text-sombra',
  'no-voy': 'bg-oxido text-cal',
  'no-se': 'bg-chapa text-sombra',
}

/** Chip de asistencia. Amarillo manda, óxido niega, chapa duda. */
export function ChipEstado({ estado, className = '' }: { estado: Estado; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-chapa px-2.5 py-1 text-[0.8125rem] font-bold tracking-[0.12em] uppercase ${ESTADO_TONO[estado]} ${className}`}
    >
      <Icono nombre={ICONO_ESTADO[estado]} className="size-3" />
      {ETIQUETA_ESTADO[estado]}
    </span>
  )
}

/**
 * El número del cartel, en dos capas: Bungee Shade atrás aporta la sombra
 * proyectada como parte del glifo, Bungee adelante es la cara pintada. La
 * sombra es tipografía real, no un text-shadow.
 */
export function NumeroPintado({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`relative block leading-none ${className}`} role="img" aria-label={children}>
      {/* Bungee Shade trae la sombra proyectada dentro del glifo. */}
      <span aria-hidden="true" className="block font-shade text-sombra">
        {children}
      </span>
      {/* La cara pintada va encima, calzada sobre el mismo origen. */}
      <span aria-hidden="true" className="absolute top-0 left-0 block font-display text-senal">
        {children}
      </span>
    </span>
  )
}

/** Rótulo de señalética: chico, ancho, mayúscula. Se usa con cuentagotas. */
export function Rotulo({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`text-[0.8125rem] font-bold tracking-[0.14em] uppercase ${className}`}>
      {children}
    </span>
  )
}

