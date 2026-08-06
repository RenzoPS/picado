/**
 * El campo de cada sección, pintado en una capa propia por debajo del hilo de
 * cal. Va aparte del elemento <section> a propósito: la línea de cal está
 * pintada sobre el césped, y las placas se atornillan encima de las dos.
 *
 * Orden de pintado dentro de <main>: fondo (-z-10) → hilo de cal (z-0) →
 * contenido de las secciones (orden del DOM).
 */
const CAMPOS = {
  vertical: 'campo-vertical',
  horizontal: 'campo-horizontal',
  deep: 'bg-cancha-deep',
  plano: 'bg-cancha',
  sombra: 'bg-sombra',
} as const

export function FondoSeccion({ tipo }: { tipo: keyof typeof CAMPOS }) {
  return <div aria-hidden="true" className={`absolute inset-0 -z-10 ${CAMPOS[tipo]}`} />
}
