import { FondoSeccion } from '../components/FondoSeccion'
import { FormEspera } from '../components/FormEspera'
import { Celular, PantallaPartido } from '../components/PantallasApp'
import { Icono } from '../components/Iconos'
import { useCuenta } from '../components/movimiento'
import { ANOTADOS, FALTAN, PROXIMO_PARTIDO } from '../data'
import { NumeroPintado, Rotulo } from '../components/ui'

/**
 * El primer viewport es el cartel de entrada: un número gigante y una línea.
 * Nada más. El que abre esto un viernes no viene a leer.
 */
/**
 * El número vive en su propio componente para que la cuenta regresiva no
 * vuelva a renderizar el hero entero —formulario y boceto incluidos— una vez
 * por cuadro durante casi un segundo.
 */
function NumeroQueFalta() {
  const cuenta = useCuenta(FALTAN, PROXIMO_PARTIDO.minimo)
  return (
    <NumeroPintado className="mt-2 text-[clamp(13rem,min(30vw,34vh),22rem)]">
      {String(cuenta)}
    </NumeroPintado>
  )
}

export function Hero() {
  return (
    <section id="arriba" className="canto-oxido relative overflow-hidden">
      <FondoSeccion tipo="vertical" />
      <div className="relative mx-auto grid max-w-[1180px] items-end gap-12 px-5 pt-14 pb-20 lg:grid-cols-[1.1fr_auto] lg:gap-16 lg:px-8 lg:pt-20 lg:pb-band">
        {/* Línea de fondo: sobre ella se apoyan las dos columnas, y de ella
            nace el hilo de cal que recorre toda la página. */}
        <div
          data-hilo-inicio
          aria-hidden="true"
          className="pointer-events-none absolute bottom-9 -left-[100vw] h-[6px] w-[200vw] bg-cal opacity-90 lg:bottom-[4.5rem]"
        />

        <div>
          {/* Un solo h1 para toda la página. El nombre accesible es la frase
              entera y estable; las tres piezas pintadas se ocultan al lector
              de pantalla para que el número animado no lo maree. */}
          <h1 aria-label={`Faltan ${FALTAN} para jugar`}>
            <span aria-hidden="true">
              <span className="letra-pintada-cal block text-[clamp(1.75rem,6vw,3rem)]">
                FALTAN
              </span>
              <NumeroQueFalta />
              <span className="letra-pintada-cal mt-3 block text-[clamp(1.75rem,6vw,3rem)]">
                PARA JUGAR
              </span>
            </span>
          </h1>

          <p className="bajada mt-9 text-cal">
            El sábado se juega o no se juega. Tu grupo lo ve en dos segundos.
          </p>

          <div className="mt-9 max-w-[560px]">
            <FormEspera />
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="relative flex justify-center lg:justify-end">
            <Celular ancho="max-w-[264px]" titulo="Lo primero que ves un viernes.">
              <PantallaPartido />
            </Celular>
          </div>
        </div>
      </div>

      {/* Tira de datos del partido: cuatro hechos con ícono, cero prosa. */}
      <div className="relative border-t-[3px] border-sombra bg-cancha-deep">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-9 gap-y-4 px-5 py-5 lg:px-8">
          {[
            { icono: 'reloj' as const, texto: `${PROXIMO_PARTIDO.dia} · ${PROXIMO_PARTIDO.hora}` },
            { icono: 'cancha' as const, texto: PROXIMO_PARTIDO.cancha },
            { icono: 'pechera' as const, texto: `${ANOTADOS} de ${PROXIMO_PARTIDO.minimo}` },
          ].map((d) => (
            <span key={d.texto} className="flex items-center gap-2.5">
              <Icono nombre={d.icono} className="size-5 shrink-0 text-senal" />
              <Rotulo className="text-cal">{d.texto}</Rotulo>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
