import type { NombreIcono } from './components/Iconos'

/**
 * Contenido de demostración, autorado a propósito para la landing.
 * Es material de diseño, no datos reales: la app todavía no existe.
 *
 * Regla de copy de esta página: un cartel no explica, nombra. Cada cosa se
 * dice con un ícono y dos o tres palabras. Si hace falta un párrafo para que
 * se entienda, el dibujo está mal.
 */

export const MARCA = 'PICADO'

export type Estado = 'voy' | 'no-voy' | 'no-se'

export type Jugador = {
  apodo: string
  estado: Estado
  goles: number
  mvps: number
}

export const PROXIMO_PARTIDO = {
  dia: 'Sábado 2 de agosto',
  hora: '20:00',
  cancha: 'Cancha 3',
  complejo: 'Complejo Los Pinos',
  minimo: 10,
} as const

export const PLANTEL: Jugador[] = [
  { apodo: 'El Negro', estado: 'voy', goles: 5, mvps: 1 },
  { apodo: 'Pipa', estado: 'voy', goles: 14, mvps: 3 },
  { apodo: 'El Colo', estado: 'voy', goles: 11, mvps: 4 },
  { apodo: 'Tincho', estado: 'voy', goles: 9, mvps: 1 },
  { apodo: 'Rusito', estado: 'voy', goles: 7, mvps: 2 },
  { apodo: 'El Tano', estado: 'voy', goles: 6, mvps: 1 },
  { apodo: 'Beto', estado: 'voy', goles: 4, mvps: 0 },
  { apodo: 'Coco', estado: 'voy', goles: 3, mvps: 1 },
  { apodo: 'El Chino', estado: 'no-se', goles: 8, mvps: 2 },
  { apodo: 'Gordo', estado: 'no-se', goles: 2, mvps: 0 },
  { apodo: 'Cabezón', estado: 'no-voy', goles: 6, mvps: 0 },
  { apodo: 'Flaco', estado: 'no-voy', goles: 1, mvps: 0 },
]

export const ANOTADOS = PLANTEL.filter((j) => j.estado === 'voy').length
export const FALTAN = Math.max(0, PROXIMO_PARTIDO.minimo - ANOTADOS)

export const GOLEADORES = [...PLANTEL].sort((a, b) => b.goles - a.goles).slice(0, 5)

export const ETIQUETA_ESTADO: Record<Estado, string> = {
  voy: 'Voy',
  'no-voy': 'No voy',
  'no-se': 'No sé',
}

export const ICONO_ESTADO: Record<Estado, NombreIcono> = {
  voy: 'voy',
  'no-voy': 'noVoy',
  'no-se': 'noSe',
}

/** Los tres pasos. Cada uno es un ícono y tres palabras. */
export const PASOS = [
  { icono: 'cancha' as NombreIcono, titulo: 'Armás el partido' },
  { icono: 'pechera' as NombreIcono, titulo: 'Se anotan' },
  { icono: 'pelota' as NombreIcono, titulo: 'Se juega' },
] as const

/** Lo que hace la app. Ícono y nombre, sin explicación. */
export const CAPACIDADES = [
  { icono: 'pechera' as NombreIcono, titulo: 'Tu grupo' },
  { icono: 'voy' as NombreIcono, titulo: 'Voy · No voy · No sé' },
  { icono: 'cancha' as NombreIcono, titulo: 'Todos los partidos' },
  { icono: 'trofeo' as NombreIcono, titulo: 'MVP del partido' },
  { icono: 'arco' as NombreIcono, titulo: 'Goles de cada uno' },
  { icono: 'sorteo' as NombreIcono, titulo: 'Sorteo de equipos' },
  { icono: 'camara' as NombreIcono, titulo: 'Foto del partido' },
  { icono: 'campana' as NombreIcono, titulo: 'Aviso la víspera' },
  { icono: 'cara' as NombreIcono, titulo: 'Apodo y foto' },
] as const

/** El sorteo del sábado: la app reparte y nadie discute el armado. */
export const EQUIPOS = {
  claros: ['Pipa', 'Tincho', 'Beto', 'El Negro', 'El Tano'],
  oscuros: ['El Colo', 'Rusito', 'Coco', 'El Chino', 'Gordo'],
} as const

/** Los rechazos explícitos del brief, como compromisos. Dos palabras cada uno. */
export const SIN_VUELTAS = [
  { icono: 'sinPublicidad' as NombreIcono, titulo: 'Sin publicidad' },
  { icono: 'gratis' as NombreIcono, titulo: 'Gratis' },
  { icono: 'sobre' as NombreIcono, titulo: 'Solo el mail' },
  { icono: 'cara' as NombreIcono, titulo: 'Fácil para tu viejo' },
] as const
