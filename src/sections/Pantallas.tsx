import { FondoSeccion } from '../components/FondoSeccion'
import { Rodillo } from '../components/Ficha'
import {
  Celular,
  PantallaFoto,
  PantallaGoleadores,
  PantallaMvp,
  PantallaSorteo,
} from '../components/PantallasApp'

const PANTALLAS = [
  { titulo: 'La app arma los equipos.', desfase: '', Vista: PantallaSorteo },
  { titulo: 'La foto queda en el grupo.', desfase: 'lg:mt-16', Vista: PantallaFoto },
  { titulo: 'Se vota el mejor.', desfase: 'lg:mt-4', Vista: PantallaMvp },
  { titulo: 'Los goles de la temporada.', desfase: 'lg:mt-20', Vista: PantallaGoleadores },
]

/**
 * La sección con más peso de la página: cuatro pantallas grandes apoyadas
 * sobre la línea de cal. Acá no se explica nada, se muestra.
 */
export function Pantallas() {
  return (
    <section id="pantallas" className="relative overflow-hidden">
      <FondoSeccion tipo="vertical" />
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-band">
        <h2 className="letra-pintada-cal max-w-[14ch] text-[clamp(2.25rem,7vw,4.5rem)]">
          ASÍ SE VE
        </h2>

        <div className="relative mt-16">
          <div className="relative flex flex-wrap justify-center gap-x-10 gap-y-16 lg:justify-between lg:gap-x-5">
            {PANTALLAS.map(({ titulo, desfase, Vista }, i) => (
              <Rodillo key={titulo} retraso={i * 110} className={desfase}>
                <Celular ancho="max-w-[252px]" titulo={titulo}>
                  <Vista />
                </Celular>
              </Rodillo>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
