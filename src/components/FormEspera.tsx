import { useId, useState, type FormEvent } from 'react'
import { Flecha, Rotulo } from './ui'

/**
 * Alta del grupo. Es una landing de presentación: el formulario valida y
 * responde en el cliente, no manda nada a ningún lado.
 */
export function FormEspera() {
  const campoId = useId()
  const errorId = useId()
  const [mail, setMail] = useState('')
  const [estado, setEstado] = useState<'inicio' | 'mandando' | 'error' | 'listo'>('inicio')

  const enviar = (e: FormEvent) => {
    e.preventDefault()
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail.trim())
    if (!valido) {
      setEstado('error')
      return
    }
    setEstado('mandando')
    window.setTimeout(() => setEstado('listo'), 550)
  }

  if (estado === 'listo') {
    return (
      <div
        className="flex items-center gap-4 rounded-chapa bg-senal px-5 py-4 text-sombra sombra-dura"
        role="status"
      >
        <Flecha direccion="derecha" className="size-7 shrink-0" />
        <p className="font-bold">
          Listo. Te mandamos el link del grupo a{' '}
          <span className="break-all">{mail.trim()}</span>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={enviar} noValidate className="w-full">
      <label htmlFor={campoId} className="block">
        <Rotulo className="text-cal">Dejá tu mail y armás tu grupo</Rotulo>
      </label>

      {/* En columna, flex-1 aplastaría la altura del input: sólo crece en fila. */}
      <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row">
        <input
          id={campoId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tumail@gmail.com"
          value={mail}
          aria-invalid={estado === 'error'}
          aria-describedby={estado === 'error' ? errorId : undefined}
          onChange={(e) => {
            setMail(e.target.value)
            if (estado === 'error') setEstado('inicio')
          }}
          className="h-16 w-full min-w-0 shrink-0 rounded-chapa border-[3px] border-sombra bg-cal px-4 text-[1.0625rem] font-medium text-sombra placeholder:text-sombra/45 sm:flex-1"
        />
        <button
          type="submit"
          disabled={estado === 'mandando'}
          className="placa placa-interactiva h-16 shrink-0 rounded-chapa bg-senal px-8 text-[1.0625rem] font-bold tracking-[0.06em] text-sombra uppercase disabled:cursor-not-allowed disabled:opacity-70"
        >
          {estado === 'mandando' ? 'Armando…' : 'Empezar'}
        </button>
      </div>

      {estado === 'error' && (
        <p
          id={errorId}
          role="alert"
          className="mt-2.5 inline-block rounded-chapa bg-oxido px-3 py-2 font-bold text-cal"
        >
          Ese mail no anda. Fijate que tenga arroba y punto, tipo juan@gmail.com.
        </p>
      )}

      <p className="mt-3 text-[1.0625rem] text-cal">
        Mail y nada más. Ni el nombre te pedimos.
      </p>
    </form>
  )
}
