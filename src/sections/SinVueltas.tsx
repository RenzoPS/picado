import { FondoSeccion } from '../components/FondoSeccion'
import { Rodillo } from '../components/Ficha'
import { Icono } from '../components/Iconos'
import { SIN_VUELTAS } from '../data'

/**
 * El reglamento del complejo: cuatro prohibiciones, cada una un ícono grande
 * y dos palabras. Un reglamento colgado en la pared no tiene párrafos.
 */
export function SinVueltas() {
  return (
    <section id="sin-vueltas" className="canto-oxido relative border-y-[3px] border-sombra">
      <FondoSeccion tipo="sombra" />
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-band">
        <h2 className="letra-pintada max-w-[14ch] text-[clamp(2.25rem,7vw,4.5rem)]">
          LO QUE NO VA A TENER
        </h2>

        <ul className="mt-16 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {SIN_VUELTAS.map((item, i) => (
            <li key={item.titulo}>
              <Rodillo retraso={i * 90}>
                <div className="ficha flex flex-col gap-6">
                  <Icono nombre={item.icono} className="icono-vivo size-16 text-senal lg:size-20" />
                  <p className="marcador max-w-[12ch] text-[clamp(1.5rem,3vw,2rem)] leading-[0.95] text-cal">
                    {item.titulo}
                  </p>
                </div>
              </Rodillo>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
