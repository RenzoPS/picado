/**
 * CONTRATO DE DIRECCIÓN — PICADO, landing de presentación
 *
 * THESIS: La página es el cartel de chapa pintada del complejo de fútbol 5, y
 * lo único que grita es el número que falta para que haya partido. Refuta la
 * landing de app de la categoría: hero centrado, celular flotando sobre un
 * gradiente y tres tarjetas iguales con iconitos.
 *
 * OWN-WORLD: Esmalte sobre chapa. Verde cancha a sangre como campo de la página,
 * blanco cal, amarillo señalización, negro de sombra dura, óxido en los bordes.
 * Letra de pincel (Bungee) con sombra sólida de blur cero, placas atornilladas
 * con remaches, flechas macizas de señalética vial. Cero gradiente, cero vidrio.
 *
 * STORY: El visitante entiende en dos segundos que esto resuelve "¿somos 10 o no
 * jugamos?", cree que es simple porque la página misma lo es, y deja el mail.
 *
 * FIRST VIEWPORT: FALTAN / 2 / PARA JUGAR pintado a escala de cartel ocupando la
 * columna izquierda, una línea de producto abajo, el form de lista de espera, y
 * a la derecha el boceto de la pantalla principal apoyado sobre la línea de cal
 * que cruza el ancho completo. Marca en placa de chapa arriba a la izquierda.
 *
 * FORM: Cartel de chapa pintada, candidato 7 de la lista fundamentada, con la
 * puesta en escena del hilo continuo: la línea de cal arranca en el primer
 * viewport, atraviesa toda la página y termina clavada en el cierre.
 * Semilla del dado: b77a9b15.
 */

import { HiloDeCal } from './components/HiloDeCal'
import { Capacidades } from './sections/Capacidades'
import { Cierre } from './sections/Cierre'
import { ComoFunciona } from './sections/ComoFunciona'
import { FotoPartido } from './sections/FotoPartido'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Nav } from './sections/Nav'
import { Pantallas } from './sections/Pantallas'
import { Quilombo } from './sections/Quilombo'
import { SinVueltas } from './sections/SinVueltas'

export default function App() {
  return (
    <>
      <a
        href="#que-hace"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-chapa focus:bg-senal focus:px-4 focus:py-3 focus:font-bold focus:text-sombra"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main className="relative">
        <HiloDeCal />
        <Hero />
        <Quilombo />
        <FotoPartido />
        <ComoFunciona />
        <Capacidades />
        <Pantallas />
        <SinVueltas />
        <Cierre />
      </main>

      <Footer />
    </>
  )
}
