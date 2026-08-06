import { FondoSeccion } from '../components/FondoSeccion'
import { Rodillo } from '../components/Ficha'
import { Icono } from '../components/Iconos'
import { Flecha } from '../components/ui'
import { PASOS } from '../data'

/**
 * Los tres pasos, contados con tres dibujos y tres títulos. No hay párrafo:
 * el numeral pintado da el orden y el ícono da el qué.
 */
export function ComoFunciona() {
  return (
    <section className="relative">
      <FondoSeccion tipo="horizontal" />
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-band">
        <h2 className="letra-pintada max-w-[14ch] text-[clamp(2.25rem,7vw,4.5rem)]">
          CÓMO SE ARMA
        </h2>

        <ol className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-6">
          {PASOS.map((paso, i) => (
            <li key={paso.titulo} className="contents">
              <Rodillo retraso={i * 130}>
                <div className="ficha placa flex flex-col gap-7 bg-cancha-deep p-8 text-cal lg:p-9">
                  <span
                    aria-hidden="true"
                    className="letra-pintada block text-[clamp(2.5rem,5vw,3.5rem)]"
                  >
                    {i + 1}
                  </span>
                  <Icono nombre={paso.icono} className="icono-vivo size-16 text-senal lg:size-20" />
                  <h3 className="marcador text-[clamp(1.5rem,3vw,2rem)] leading-[0.95]">
                    {paso.titulo}
                  </h3>
                </div>
              </Rodillo>

              {i < PASOS.length - 1 && (
                <Flecha
                  direccion="derecha"
                  className="mx-auto hidden size-9 shrink-0 text-senal lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
