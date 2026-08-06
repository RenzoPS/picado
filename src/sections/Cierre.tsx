import { FondoSeccion } from '../components/FondoSeccion'
import { FormEspera } from '../components/FormEspera'
import { Icono } from '../components/Iconos'
import { Rotulo } from '../components/ui'

/**
 * El cierre: donde termina clavado el hilo de cal. Un título grande, el form,
 * y nada más.
 */
export function Cierre() {
  return (
    <section id="cierre" className="canto-oxido relative overflow-hidden">
      <FondoSeccion tipo="vertical" />
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-band">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-2.5 rounded-chapa bg-sombra px-4 py-2.5">
            <Icono nombre="pelota" className="size-5 shrink-0 text-senal" />
            <Rotulo className="text-senal">Para el sábado que viene</Rotulo>
          </span>

          {/* Dos bloques en vez de un <br>: con el salto de línea el nombre
              accesible salía pegado, "ARMÁ TUPRIMER PICADO". */}
          <h2 className="letra-pintada-cal mt-5 text-[clamp(2.5rem,9vw,5.5rem)]">
            <span className="block">ARMÁ TU </span>
            <span className="block">PRIMER PICADO</span>
          </h2>

          {/* Acá muere el hilo de cal: la línea termina clavada en la acción. */}
          <div data-hilo-fin className="mt-10 max-w-[600px]">
            <FormEspera />
          </div>
        </div>
      </div>
    </section>
  )
}
