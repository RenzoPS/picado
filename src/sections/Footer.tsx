import { MARCA } from '../data'
import { Rotulo } from '../components/ui'

export function Footer() {
  return (
    <footer className="border-t-[3px] border-sombra bg-cancha-deep">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-5 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <span className="font-display text-[1.75rem] leading-none text-cal">{MARCA}</span>

        <div className="max-w-[44ch]">
          <Rotulo className="text-cal">Los sábados a las 20</Rotulo>
          <p className="letra-chica mt-3 text-cal">
            Pieza de diseño: los nombres, los números y las fotos son de ejemplo.
          </p>
        </div>
      </div>
    </footer>
  )
}
