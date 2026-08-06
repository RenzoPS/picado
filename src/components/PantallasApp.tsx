import type { ReactNode } from 'react'
import {
  ANOTADOS,
  EQUIPOS,
  FALTAN,
  GOLEADORES,
  MARCA,
  PLANTEL,
  PROXIMO_PARTIDO,
} from '../data'
import { Icono } from './Iconos'
import { ChipEstado, Rotulo } from './ui'

/**
 * Marco de celular: un objeto plano apoyado sobre el campo, con sombra dura.
 * Nunca flota, nunca se inclina en perspectiva.
 */
export function Celular({
  children,
  titulo,
  ancho = 'max-w-[290px]',
  className = '',
}: {
  children: ReactNode
  titulo: string
  ancho?: string
  className?: string
}) {
  return (
    <figure className={`w-full ${ancho} ${className}`}>
      <div className="rounded-[26px] bg-sombra p-2.5 shadow-[10px_10px_0_var(--color-sombra-apoyo)]">
        <div className="overflow-hidden rounded-[18px] bg-cancha-deep">
          <div className="flex items-center justify-between border-b-[3px] border-sombra bg-sombra px-4 py-2.5">
            <Rotulo className="text-cal">{MARCA}</Rotulo>
            <Icono nombre="pelota" className="size-4 text-senal" />
          </div>
          {children}
        </div>
      </div>
      <figcaption className="mt-4 flex items-center gap-2.5">
        <span aria-hidden="true" className="h-[5px] w-6 shrink-0 bg-senal" />
        <span className="letra-chica text-cal">{titulo}</span>
      </figcaption>
    </figure>
  )
}

/** Pantalla principal: el número primero, todo lo demás después. */
export function PantallaPartido() {
  const anotados = PLANTEL.filter((j) => j.estado === 'voy')
  const dudosos = PLANTEL.filter((j) => j.estado === 'no-se')

  return (
    <div className="bg-cancha">
      <div className="border-b-[3px] border-sombra bg-cancha-deep px-4 pt-4 pb-5">
        <Rotulo className="text-cal">{PROXIMO_PARTIDO.dia}</Rotulo>
        <p className="marcador mt-1.5 text-[1.375rem] leading-none text-cal">
          {PROXIMO_PARTIDO.hora} · {PROXIMO_PARTIDO.cancha}
        </p>

        <div className="mt-4 flex items-end gap-3">
          <span className="marcador block text-[4.5rem] leading-[0.8] text-senal sombra-letra">
            {FALTAN}
          </span>
          <p className="marcador pb-2 text-[1.0625rem] leading-tight text-cal">
            faltan
            <br />
            para jugar
          </p>
        </div>

        <div className="mt-4 flex h-3 gap-1" role="img" aria-label={`${ANOTADOS} de 10 anotados`}>
          {Array.from({ length: PROXIMO_PARTIDO.minimo }, (_, i) => (
            <span
              key={i}
              className={`h-full flex-1 rounded-[1px] ${i < ANOTADOS ? 'bg-senal' : 'bg-cal/25'}`}
            />
          ))}
        </div>
      </div>

      <ul className="divide-y-[3px] divide-cancha-deep">
        {[...anotados.slice(0, 4), ...dudosos.slice(0, 1)].map((j) => (
          <li key={j.apodo} className="flex items-center justify-between px-4 py-2.5">
            <span className="font-bold text-cal">{j.apodo}</span>
            <ChipEstado estado={j.estado} />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-3 gap-[3px] bg-sombra p-[3px]">
        <span className="flex items-center justify-center gap-1.5 bg-senal py-3 text-center text-[0.8125rem] font-bold tracking-[0.08em] text-sombra uppercase">
          <Icono nombre="voy" className="size-3.5" />
          Voy
        </span>
        <span className="flex items-center justify-center gap-1.5 bg-oxido py-3 text-center text-[0.8125rem] font-bold tracking-[0.08em] text-cal uppercase">
          <Icono nombre="noVoy" className="size-3.5" />
          No
        </span>
        <span className="flex items-center justify-center gap-1.5 bg-chapa py-3 text-center text-[0.8125rem] font-bold tracking-[0.08em] text-sombra uppercase">
          <Icono nombre="noSe" className="size-3.5" />
          No sé
        </span>
      </div>
    </div>
  )
}

/** Pantalla de votación del mejor del partido. */
export function PantallaMvp() {
  const jugaron = PLANTEL.filter((j) => j.estado === 'voy').slice(0, 6)

  return (
    <div className="bg-cancha px-4 pt-4 pb-5">
      <div className="flex items-center gap-2.5">
        <Icono nombre="trofeo" className="size-5 text-senal" />
        <Rotulo className="text-cal">Terminó el partido</Rotulo>
      </div>
      <p className="marcador mt-2 text-[1.5rem] leading-none text-cal">¿Quién fue el mejor?</p>

      <ul className="mt-4 space-y-[3px]">
        {jugaron.map((j, i) => (
          <li
            key={j.apodo}
            className={`flex items-center justify-between rounded-chapa px-3 py-2.5 ${
              i === 1 ? 'bg-senal text-sombra' : 'bg-cancha-deep text-cal'
            }`}
          >
            <span className="flex items-center gap-2.5 font-bold">
              <span
                aria-hidden="true"
                className={`grid size-7 place-items-center rounded-full text-[0.8125rem] font-bold ${
                  i === 1 ? 'bg-sombra text-senal' : 'bg-chapa text-sombra'
                }`}
              >
                {j.apodo.replace('El ', '').charAt(0)}
              </span>
              {j.apodo}
            </span>
            {i === 1 && <Icono nombre="voy" className="size-4 text-sombra" />}
          </li>
        ))}
      </ul>

      <p className="marcador mt-4 bg-sombra px-3 py-3 text-center text-[1.0625rem] tracking-[0.06em] text-senal uppercase">
        Votar
      </p>
    </div>
  )
}

/** Pantalla de goleadores acumulados del grupo. */
export function PantallaGoleadores() {
  const tope = GOLEADORES[0].goles

  return (
    <div className="bg-cancha px-4 pt-4 pb-5">
      <div className="flex items-center gap-2.5">
        <Icono nombre="arco" className="size-5 text-senal" />
        <Rotulo className="text-cal">Temporada</Rotulo>
      </div>
      <p className="marcador mt-2 text-[1.5rem] leading-none text-cal">Goleadores</p>

      <ul className="mt-4 space-y-3">
        {GOLEADORES.map((j) => (
          <li key={j.apodo}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-bold text-cal">{j.apodo}</span>
              <span className="marcador text-[1.5rem] leading-none text-senal">{j.goles}</span>
            </div>
            <div className="mt-1 h-2.5 bg-cancha-deep">
              <div
                className="h-full bg-senal"
                style={{ width: `${Math.round((j.goles / tope) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Sorteo de equipos: la app reparte y nadie discute el armado. */
export function PantallaSorteo() {
  return (
    <div className="bg-cancha px-4 pt-4 pb-5">
      <div className="flex items-center gap-2.5">
        <Icono nombre="sorteo" className="size-5 text-senal" />
        <Rotulo className="text-cal">Sorteo</Rotulo>
      </div>
      <p className="marcador mt-2 text-[1.5rem] leading-none text-cal">Los equipos</p>

      <div className="mt-4 grid grid-cols-2 gap-[3px]">
        {(
          [
            { nombre: 'Claros', jugadores: EQUIPOS.claros, tono: 'bg-chapa text-sombra' },
            { nombre: 'Oscuros', jugadores: EQUIPOS.oscuros, tono: 'bg-sombra text-cal' },
          ] as const
        ).map((equipo) => (
          <div key={equipo.nombre} className={`${equipo.tono} p-2.5`}>
            <p className="marcador text-[1.0625rem] tracking-normal uppercase">{equipo.nombre}</p>
            <ul className="mt-2 space-y-1.5">
              {equipo.jugadores.map((j) => (
                <li key={j} className="text-[1.0625rem] font-bold">
                  {j}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="marcador mt-4 bg-senal px-3 py-3 text-center text-[1.0625rem] tracking-[0.06em] text-sombra uppercase">
        Sortear de nuevo
      </p>
    </div>
  )
}

/** La foto que queda del partido. */
export function PantallaFoto() {
  return (
    <div className="bg-cancha">
      <div className="flex items-center gap-2.5 px-4 pt-4 pb-3">
        <Icono nombre="camara" className="size-5 text-senal" />
        <Rotulo className="text-cal">Sábado 26 de julio</Rotulo>
      </div>
      <img
        src="/fotos/equipo.webp"
        alt="Afiche serigrafiado del grupo posando en la cancha después del partido"
        width={640}
        height={480}
        loading="lazy"
        className="aspect-[4/3] w-full border-y-[3px] border-sombra object-cover"
      />
      <div className="flex items-center justify-between px-4 py-3.5">
        <p className="marcador text-[1.25rem] leading-none text-cal">Ganamos 6 a 4</p>
        <Icono nombre="trofeo" className="size-5 text-senal" />
      </div>
    </div>
  )
}
