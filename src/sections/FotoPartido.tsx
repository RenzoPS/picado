import { ANOTADOS, PROXIMO_PARTIDO } from '../data'
import { Icono } from '../components/Iconos'
import { Remaches, Rotulo } from '../components/ui'

/**
 * La banda de foto: el sábado a la noche, que es para lo que existe todo esto.
 *
 * No es una imagen apoyada sobre el campo: es una abertura recortada en la
 * chapa que deja ver la cancha de atrás. De ahí sale todo el tratamiento del
 * borde y no de una decisión decorativa —
 *
 * - el filete de sombra cierra arriba y abajo por igual, porque un corte tiene
 *   dos labios y no uno; con borde sólo abajo la banda flotaba como un aviso
 *   pegado;
 * - el canto en las dos orillas es el espesor del material visto de canto, que
 *   es lo que delata que hay una chapa por delante y no un marco dibujado;
 * - los remaches atornillan la chapa alrededor del recorte, igual que en
 *   cualquier otra placa del sistema;
 * - el esmalte comido (`canto-oxido`) es el mismo borde que llevan el hero, el
 *   cierre y la sección de rechazos: la abertura envejece como el resto del
 *   cartel, no como una pieza aparte.
 */
export function FotoPartido() {
  return (
    <section className="canto-oxido relative border-y-[3px] border-sombra">
      <img
        src="/fotos/partido-noche.webp"
        alt="Afiche serigrafiado de un partido de fútbol 5 de noche en cancha de sintético, con torres de luz"
        width={1376}
        height={768}
        loading="lazy"
        className="block h-[62vh] max-h-[620px] min-h-[340px] w-full object-cover"
      />

      {/* El espesor de la chapa visto en el labio del corte. Sombra dura, blur 0. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0_4px_0_var(--color-canto),inset_0_-4px_0_var(--color-canto)]"
      />

      {/* La chapa sigue atornillada alrededor del recorte. */}
      <Remaches />

      {/* Placa de chapa atornillada sobre la foto, como el cartel del complejo. */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="mx-auto max-w-[1180px] px-5 pb-8 lg:px-8 lg:pb-12">
          <div className="placa inline-flex flex-wrap items-center gap-x-7 gap-y-3 bg-sombra px-6 py-4">
            <span className="flex items-center gap-2.5">
              <Icono nombre="reloj" className="size-5 shrink-0 text-senal" />
              <Rotulo className="text-cal">
                {PROXIMO_PARTIDO.dia} · {PROXIMO_PARTIDO.hora}
              </Rotulo>
            </span>
            <span className="flex items-center gap-2.5">
              <Icono nombre="pechera" className="size-5 shrink-0 text-senal" />
              <Rotulo className="text-cal">
                {ANOTADOS} de {PROXIMO_PARTIDO.minimo} anotados
              </Rotulo>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
