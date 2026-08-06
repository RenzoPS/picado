import { FondoSeccion } from '../components/FondoSeccion'
import { Rodillo } from '../components/Ficha'
import { Flecha, Placa, Rotulo } from '../components/ui'

const CUENTAS_TACHADAS = ['12', '9', '14', '8']

/**
 * El problema, dibujado en vez de contado: la cuenta que cambia toda la
 * semana, tachada, hasta que aparece el número que importa.
 */
export function Quilombo() {
  return (
    <section className="relative border-y-[3px] border-sombra">
      <FondoSeccion tipo="deep" />
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-band">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <Rotulo className="text-chapa">En el grupo de WhatsApp</Rotulo>
            <h2 className="letra-pintada-cal mt-5 max-w-[13ch] text-[clamp(2.5rem,8vw,5.5rem)]">
              NADIE SABE CUÁNTOS SOMOS
            </h2>
          </div>

          <Rodillo>
            <div className="flex items-center gap-6 lg:gap-9">
              <ul className="space-y-3" aria-label="La cuenta que cambia toda la semana">
                {CUENTAS_TACHADAS.map((n) => (
                  <li key={n} className="relative">
                    <span className="marcador block text-[clamp(2.75rem,8vw,4rem)] leading-none text-cal">
                      {n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[-10%] top-1/2 h-[6px] -translate-y-1/2 -rotate-6 bg-oxido"
                    />
                  </li>
                ))}
              </ul>

              <Flecha direccion="derecha" className="size-10 shrink-0 text-senal lg:size-14" />

              <Placa tono="senal" className="px-7 py-8 lg:px-11 lg:py-12">
                <span className="marcador block text-[clamp(4.5rem,14vw,8rem)] leading-none">
                  10
                </span>
                <Rotulo className="mt-3 block">y se juega</Rotulo>
              </Placa>
            </div>
          </Rodillo>
        </div>
      </div>
    </section>
  )
}
