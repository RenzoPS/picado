import { MARCA } from '../data'
import { Remaches, Rotulo } from '../components/ui'

const ANCLAS = [
  { href: '#que-hace', texto: 'Qué hace' },
  { href: '#pantallas', texto: 'Cómo se ve' },
  { href: '#sin-vueltas', texto: 'Sin vueltas' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-sombra bg-cancha-deep">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a
          href="#arriba"
          className="placa relative flex min-h-12 items-center rounded-chapa bg-chapa px-7 text-sombra"
        >
          <Remaches />
          <span className="font-display text-[1.375rem] leading-none tracking-tight">{MARCA}</span>
        </a>

        <nav aria-label="Secciones" className="hidden items-center gap-7 md:flex">
          {ANCLAS.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-cal underline-offset-[6px] hover:text-senal hover:underline hover:decoration-[3px]"
            >
              <Rotulo>{a.texto}</Rotulo>
            </a>
          ))}
        </nav>

        <a
          href="#cierre"
          className="placa placa-interactiva rounded-chapa bg-senal px-5 py-3 text-sombra"
        >
          <Rotulo>Empezar</Rotulo>
        </a>
      </div>
    </header>
  )
}
