/**
 * Íconos del cartel: silueta maciza, un solo color plano, sin trazo variable
 * y sin esquinas redondeadas de librería. Se dibujan como los pintaría alguien
 * con una plantilla y un pincel plano, no como un set de líneas finas.
 *
 * Todos comparten viewBox 0 0 24 24 y heredan el color con currentColor.
 */

export type NombreIcono =
  | 'pelota'
  | 'silbato'
  | 'pechera'
  | 'cancha'
  | 'campana'
  | 'trofeo'
  | 'arco'
  | 'cara'
  | 'voy'
  | 'noVoy'
  | 'noSe'
  | 'camara'
  | 'sorteo'
  | 'chop'
  | 'chat'
  | 'sinPublicidad'
  | 'gratis'
  | 'sobre'
  | 'reloj'

const TRAZOS: Record<NombreIcono, string> = {
  // Pelota. Va en línea, como un balón de verdad: el círculo exterior y los
  // gajos cosidos. En silueta maciza los pentágonos se empastan y queda una
  // mancha con puntitos, que es exactamente lo que no se entiende.
  pelota:
    'M12 2.6a9.4 9.4 0 110 18.8 9.4 9.4 0 010-18.8z M12 6.6l3.9 2.8-1.5 4.6h-4.8L8.1 9.4z M12 2.6v4 M15.9 9.4l3.8-1.3 M14.4 14l2.4 3.2 M9.6 14l-2.4 3.2 M8.1 9.4L4.3 8.1 M16.8 17.2l1.4 2 M7.2 17.2l-1.4 2',
  // Silbato del árbitro: cuerpo, boquilla y el agujero.
  silbato:
    'M2 8.4h11.4l2.6-3.2 6 2-2.4 4 2.4 1.4v3.4A5.8 5.8 0 0116.2 22H8.6A6.6 6.6 0 012 15.4V8.4zm7 4.2a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8z',
  // Pechera / camiseta: el grupo.
  pechera:
    'M8.6 2h1.6a1.9 1.9 0 003.6 0h1.6L22 5.4l-2.3 4.7-2.6-1.3V22H6.9V8.8l-2.6 1.3L2 5.4 8.6 2z',
  // Cancha vista desde arriba. Va en modo línea: las marcas de una cancha son
  // literalmente líneas de cal pintadas, no una silueta maciza.
  cancha: 'M3 5h18v14H3z M12 5v14 M15 12a3 3 0 11-6 0 3 3 0 116 0 M3 9h3v6H3 M21 9h-3v6h3',
  // Campana del aviso.
  campana:
    'M12 1.4a2 2 0 012 2v.7a6.6 6.6 0 014.6 6.3v4.4l2.4 3.2H3l2.4-3.2v-4.4A6.6 6.6 0 0110 4.1v-.7a2 2 0 012-2zM8.7 19.6h6.6a3.3 3.3 0 01-6.6 0z',
  // Trofeo del mejor del partido.
  trofeo:
    'M6 2h12v2.2h4v2.6a5 5 0 01-4.4 5 6 6 0 01-4.2 3.3V18h3.4v4H7.2v-4h3.4v-3.5a6 6 0 01-4.2-3.3A5 5 0 012 6.8V4.2h4V2zM6 6.8H4.2a2.8 2.8 0 001.8 2.5V6.8zm12 0v2.5a2.8 2.8 0 001.8-2.5H18z',
  // Arco con red: los goles. También en modo línea, porque una red es red.
  arco: 'M4 19V6h16v13 M8.4 6v13 M12 6v13 M15.6 6v13 M4 10.3h16 M4 14.6h16',
  // Cara de perfil: el apodo y la foto.
  cara: 'M12 2.4a5 5 0 110 10 5 5 0 010-10zM3 22a9 9 0 0118 0v.4H3V22z',
  // Voy: tilde macizo.
  voy: 'M9.3 20.4L1 12l3.2-3.2 5.1 5.1L19.8 3.6 23 6.8 9.3 20.4z',
  // No voy: cruz maciza.
  noVoy: 'M4.6 1.4L12 8.8l7.4-7.4 3.2 3.2L15.2 12l7.4 7.4-3.2 3.2L12 15.2l-7.4 7.4-3.2-3.2L8.8 12 1.4 4.6l3.2-3.2z',
  // No sé: signo de pregunta macizo.
  noSe: 'M12 1.4a6.4 6.4 0 016.4 6.4c0 2.6-1.5 3.8-3 4.8-1.2.8-1.6 1.3-1.6 2.4v.8h-3.6v-1.2c0-2.3 1-3.4 2.5-4.4 1.2-.8 1.7-1.3 1.7-2.4A2.4 2.4 0 0012 5.4a2.5 2.5 0 00-2.5 2.6H5.6A6.4 6.4 0 0112 1.4zM12 18.2a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z',
  // Cámara: la foto del equipo.
  camara:
    'M8.6 3h6.8l1.4 2.4H22V21H2V5.4h5.2L8.6 3zm3.4 5.2a5 5 0 100 10 5 5 0 000-10zm0 2.6a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z',
  // Sorteo: el grupo que se parte en dos equipos. Línea: es un diagrama.
  sorteo: 'M2 12h4 M6 12l5-5h11 M6 12l5 5h11 M16.5 3.5L22 7l-5.5 3.5 M16.5 13.5L22 17l-5.5 3.5',
  // Chop del tercer tiempo: jarra con asa y espuma.
  chop: 'M2.6 5h12.8v16H2.6V5zm12.8 3h3.6A2.6 2.6 0 0121.6 10.6v4.8a2.6 2.6 0 01-2.6 2.6h-3.6V8zm0 2.4v5.2h1.8v-5.2h-1.8zM6 2.6h6.6v2H6v-2z',
  // Globo de chat con las dos líneas del mensaje.
  chat: 'M2.4 3.4h19.2v13.2H10.2L5 21.4v-4.8H2.4V3.4zm3.4 3.6v2.2h12.4V7H5.8zm0 4.4v2.2h8.2v-2.2H5.8z',
  // Sin publicidad: el cartel de la ruta, tachado. En línea, porque un objeto
  // tachado en silueta maciza se vuelve una mancha ilegible.
  sinPublicidad: 'M4 4.5h16v10H4z M12 14.5v5 M8.5 19.5h7 M3 2.6l18 18.8',
  // Gratis: el billete, tachado.
  gratis: 'M2 7h20v10H2z M15 12a3 3 0 11-6 0 3 3 0 116 0 M3 3.4l18 17.2',
  // Sobre: solo el mail.
  sobre: 'M2 4h20v3.2L12 13.6 2 7.2V4zm0 5.6l10 6.4 10-6.4V20H2V9.6z',
  // Reloj del día anterior.
  reloj:
    'M12 1.4A10.6 10.6 0 111.4 12 10.6 10.6 0 0112 1.4zm-1.4 4.4v7.4l5.6 3.4 1.4-2.3-4.4-2.6V5.8h-2.6z',
}

/**
 * Los que se dibujan con línea en vez de relleno: una cancha y una red son
 * líneas de verdad. El grosor es uniforme y las puntas son rectas, así que
 * sigue siendo la gramática del cartel y no un ícono de librería.
 */
const DE_LINEA = new Set<NombreIcono>([
  'cancha',
  'arco',
  'sinPublicidad',
  'gratis',
  'pelota',
  'sorteo',
])

export function Icono({ nombre, className = '' }: { nombre: NombreIcono; className?: string }) {
  const linea = DE_LINEA.has(nombre)
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={linea ? 'none' : 'currentColor'}
      stroke={linea ? 'currentColor' : undefined}
      strokeWidth={linea ? 2.2 : undefined}
      strokeLinecap={linea ? 'butt' : undefined}
      strokeLinejoin={linea ? 'miter' : undefined}
      aria-hidden="true"
    >
      <path d={TRAZOS[nombre]} />
    </svg>
  )
}
