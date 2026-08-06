import { FondoSeccion } from '../components/FondoSeccion'
import { Ficha, FichaPregunta, Rodillo } from '../components/Ficha'
import { CAPACIDADES } from '../data'

/** El voto de asistencia tiene composición propia; el resto son fichas. */
const PREGUNTA = 1

/** Las que van sobre chapa clara, para romper la pared de verde. */
const EN_CHAPA = new Set(['Aviso la víspera'])

/**
 * Todo lo que hace la app, en fichas de ícono y nombre. Los tamaños son
 * desparejos a propósito: un cartel se arma con las chapas que hay, y lo que
 * más importa ocupa más lugar.
 */
export function Capacidades() {
  const resto = CAPACIDADES.filter((_, i) => i !== PREGUNTA)

  return (
    <section id="que-hace" className="relative border-y-[3px] border-sombra">
      <FondoSeccion tipo="deep" />
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-band">
        <h2 className="letra-pintada max-w-[16ch] text-[clamp(2.25rem,7vw,4.5rem)]">
          LO QUE HACE
        </h2>

        {/* La pregunta va de ancho completo y el resto en filas parejas: con
            8 fichas en 4 columnas cierra exacto y no queda ninguna celda
            vacía. Además la pregunta deja de estirarse, que era lo que la
            volvía gigante de nuevo en desktop. */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Rodillo className="sm:col-span-2 lg:col-span-4" retraso={0}>
            <FichaPregunta />
          </Rodillo>

          {resto.map((c, i) => (
            <Rodillo key={c.titulo} retraso={80 + i * 60}>
              <Ficha
                icono={c.icono}
                titulo={c.titulo}
                tono={EN_CHAPA.has(c.titulo) ? 'chapa' : 'deep'}
                className="h-full"
              />
            </Rodillo>
          ))}
        </div>
      </div>
    </section>
  )
}
