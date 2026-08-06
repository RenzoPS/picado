---
name: PICADO
description: Landing de presentación de la app que organiza los partidos de fútbol 5 del grupo
colors:
  cancha: "#0B6B3A"
  cancha-deep: "#064A28"
  cancha-raya: "#085530"
  cal: "#F2EFE3"
  senal: "#FFC220"
  sombra: "#0A0F0C"
  oxido: "#B4381F"
  chapa: "#C9C3B4"
  canto: "rgb(10 15 12 / 0.45)"
  sombra-apoyo: "rgb(10 15 12 / 0.55)"
typography:
  display:
    fontFamily: "Bungee, Impact, sans-serif"
    fontSize: "clamp(3rem, 13vw, 9rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  numero-cartel:
    fontFamily: "Bungee Shade, Bungee, Impact, sans-serif"
    fontSize: "clamp(13rem, min(30vw, 34vh), 22rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 6vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  marcador:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 20vw, 14rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.15
  bajada:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  letra-chica:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.4
    fontStyle: "italic"
  label:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
  pantalla-numero:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 0.8
  pantalla-titulo:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1
  pantalla-dato:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 900
    lineHeight: 1
  pantalla-cifra:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1
rounded:
  none: "0px"
  chapa: "3px"
  plate: "6px"
  rivet: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "28px"
  lg: "48px"
  xl: "88px"
  band: "136px"
components:
  button-primary:
    backgroundColor: "{colors.senal}"
    textColor: "{colors.sombra}"
    typography: "{typography.title}"
    rounded: "{rounded.chapa}"
    padding: "20px 40px"
    height: "64px"
  button-primary-hover:
    backgroundColor: "{colors.cal}"
    textColor: "{colors.sombra}"
  button-secondary:
    backgroundColor: "{colors.cancha-deep}"
    textColor: "{colors.cal}"
    typography: "{typography.title}"
    rounded: "{rounded.chapa}"
    padding: "18px 32px"
    height: "60px"
  input-mail:
    backgroundColor: "{colors.cal}"
    textColor: "{colors.sombra}"
    typography: "{typography.bajada}"
    rounded: "{rounded.chapa}"
    padding: "18px 20px"
    height: "64px"
  plate:
    backgroundColor: "{colors.cancha-deep}"
    textColor: "{colors.cal}"
    rounded: "{rounded.plate}"
    padding: "32px"
  plate-senal:
    backgroundColor: "{colors.senal}"
    textColor: "{colors.sombra}"
    rounded: "{rounded.plate}"
    padding: "32px"
  chip-voy:
    backgroundColor: "{colors.senal}"
    textColor: "{colors.sombra}"
    typography: "{typography.label}"
    rounded: "{rounded.chapa}"
    padding: "10px 16px"
  chip-no-voy:
    backgroundColor: "{colors.oxido}"
    textColor: "{colors.cal}"
    typography: "{typography.label}"
    rounded: "{rounded.chapa}"
    padding: "10px 16px"
  chip-no-se:
    backgroundColor: "{colors.chapa}"
    textColor: "{colors.sombra}"
    typography: "{typography.label}"
    rounded: "{rounded.chapa}"
    padding: "10px 16px"
---

# Design System: PICADO

## Overview

**Creative North Star: "El cartel de chapa del complejo"**

Toda la superficie es el cartel pintado a mano que cuelga en la entrada de un complejo de fútbol 5 del barrio: chapa esmaltada verde cancha, letras de pincel amarillas con sombra dura, flechas pintadas que mandan a la gente para donde tiene que ir, remaches en las esquinas y óxido asomando en los bordes. La señalética existe para gritar un número y una dirección desde treinta metros, que es exactamente lo que el producto hace: decir cuántos van y cuántos faltan para diez.

La densidad es baja y la escala es enorme. Un cartel no razona con vos: te tira el dato en la cara y te manda a un lado. Cada pantalla tiene un solo número dominante, tipografía a escala de cartel de ruta, y espacio verde vacío alrededor que hace de campo. Nada de tarjetas flotando sobre gradientes, nada de vidrio, nada de sombras difusas: la pintura es opaca y la sombra es un bloque negro corrido unos píxeles.

Rechazos confirmados por el brief del cliente: nada "gris aburrido tipo Excel del laburo", y la combinación azul + amarillo de Boca queda vetada por conflictiva dentro del grupo. El amarillo señalización se usa solo; el azul no existe en este sistema.

**Key Characteristics:**
- Verde cancha como campo de la página entera, no como acento
- Letras de pincel a escala de cartel, siempre en mayúsculas en el rol display
- Sombra dura sin blur, nunca difusa
- La línea de cal blanca como hilo estructural que cruza toda la página
- Chapa, remaches y óxido como material; cero cromo digital

## Colors

Paleta de esmalte sintético sobre chapa: pocos colores, todos planos, todos saturados, aplicados en campos grandes.

### Primary
- **Verde Cancha** (#0B6B3A): el campo. Ocupa la mayor parte de cada viewport. No es un fondo neutro sobre el que se apoyan cosas: es el material del cartel.
- **Verde Cancha Profundo** (#064A28): bandas alternadas del césped cortado, placas atornilladas sobre el campo, y la zona de sombra bajo cualquier elemento levantado.
- **Verde Raya de Corte** (#085530): la franja alterna del césped recién cortado. Solo para el rayado del campo, nunca para texto ni controles. El rayado siempre alterna hacia abajo en luminancia: así la superficie más clara que puede tocar texto sigue siendo el Verde Cancha, y el cuerpo en cal mantiene 5.1:1 en toda la página.

### Secondary
- **Amarillo Señalización** (#FFC220): el color de la voz que manda. La marca pintada, la acción primaria, el número que falta, la flecha que apunta. Es el único color que dice "hacé esto".

### Tertiary
- **Óxido de Chapa** (#B4381F): el "no voy", los avisos, el borde comido de las placas viejas. Aparece poco y siempre significa negación o desgaste.

### Neutral
- **Cal** (#F2EFE3): la pintura blanca de las líneas de la cancha y el texto largo sobre verde. Cálida y con cuerpo, como cal aplicada con rodillo. **Nunca es el fondo de la página.**
- **Chapa Galvanizada** (#C9C3B4): estados neutros o inciertos ("no sé todavía"), superficies metálicas sin pintar.
- **Sombra** (#0A0F0C): sombra dura, contorno de letras, texto sobre amarillo.

### Named Rules

**La Regla del Campo.** El verde es la página, no un acento. Si un viewport tiene fondo claro dominante, el mundo se rompió. La cal pinta líneas y texto; jamás se convierte en el fondo de una sección.

**La Regla del Veto de Boca.** El amarillo señalización nunca convive con azul. Es un veto explícito del cliente, no una preferencia estética.

**La Regla del Amarillo Escaso.** El amarillo marca acción, número y dirección. Si aparece en más de un elemento por viewport, dejó de dirigir a nadie.

**La Regla del Amarillo sobre Chapa.** El amarillo señalización sobre verde cancha da 4.09:1: alcanza para letras grandes pintadas, no para texto chico. Todo amarillo por debajo de 24px va sobre una placa oscura (sombra o verde profundo), nunca directo sobre el campo. Es la misma razón por la que en la cancha real los carteles chicos van sobre chapa y los números grandes se pintan sobre la pared.

**La Regla de la Cal Entera.** El texto no se jerarquiza bajando la opacidad de la cal: sobre el rayado del césped, cualquier cal por debajo del 85% se cae del 4.5:1. La jerarquía se hace con tamaño y peso, que es como se hace en un cartel.

## Typography

**Display Font:** Bungee, y Bungee Shade para el número del cartel (fallback Impact, sans-serif)
**Todo lo demás:** Chivo (fallback system-ui, sans-serif)

**Character:** Bungee está diseñada específicamente para señalética urbana y trae de fábrica sus variantes Shade e Inline — la sombra dura proyectada es parte de la fuente, no un efecto agregado. Ese es el motivo funcional de la elección: la letra ya es un cartel.

Chivo hace todo lo demás, en dos extremos del mismo diseño: Black para marcadores y títulos de placa, Regular e itálica para lectura. Es una neo-grotesca de Omnibus-Type (Héctor Gatti) pensada por su propio autor para lectura larga en Regular y para titulares en Black, con itálicas verdaderas y acentuación completa. Se eligió por dos motivos concretos: es una tipografía del mundo hispanohablante en un producto cuya voz es rioplatense —el nombre "Chivo" no es decorativo—, y su solidez de asta aguanta el amarillo sobre verde sin desarmarse. Lo que se descartó fue el grotesco de trabajo genérico: correcto, invisible y sin ninguna opinión, que es exactamente lo que un cartel pintado a mano no es.

### Hierarchy
- **Número de Cartel** (Bungee Shade + Bungee superpuestas, clamp(13rem, min(30vw, 34vh), 22rem), lh 0.82): el número que falta, en el primer viewport. Es el elemento más grande de la página y el único que usa Bungee Shade. Se construye en dos capas: Bungee Shade en negro atrás aportando la sombra proyectada como parte del glifo, y Bungee en amarillo encima como cara pintada. La sombra es tipografía, no un efecto.
- **Display** (Bungee 400, clamp(3rem, 13vw, 9rem), lh 0.86): la marca y los rótulos de sección. Siempre en mayúsculas, siempre con sombra dura. Uno por viewport.
- **Marcador** (Chivo 900, clamp(4.5rem, 20vw, 14rem), lh 0.8, cifras tabulares): el número dominante y los títulos de placa. Tracking negativo: los números se aprietan como en un marcador de cancha.
- **Headline** (Chivo 900, clamp(2rem, 6vw, 4rem), lh 0.94): títulos de sección cuando el rótulo Bungee ya se gastó arriba.
- **Title** (Chivo 700, clamp(1.25rem, 2.5vw, 1.75rem)): encabezados de control y de acción.
- **Label** (Chivo 700, 13px, tracking 0.14em, mayúsculas): rótulos de señalética, estados de asistencia.

### Los tres registros de lectura

Un cartel no escribe todo del mismo modo. Quedan dos registros: la bajada entra a la sección, la letra chica aclara al costado. El registro intermedio de párrafo de placa se eliminó cuando las placas pasaron a ser fichas de ícono y nombre; mantenerlo documentado sin usuarios era deuda del sistema.

- **Bajada** (Chivo 400, clamp(1.25rem, 2vw, 1.5rem), lh 1.35, máximo 44ch): entra a una sección. Se lee de lejos, dura dos o tres renglones, y lleva una raya de cal de 56×5px arriba que la separa del título. Una sola por sección.
- **Letra chica** (Chivo 400 itálica, 17px, lh 1.4): aclaraciones, epígrafes de boceto y advertencias. Va en itálica porque es la nota escrita al costado del cartel cuando ya no quedaba lugar, y porque marca lo que todavía no es firme.

**La Regla del Brochazo.** El énfasis dentro de un párrafo no es una negrita suelta: es una **pincelada** amarilla de borde duro por debajo de la palabra, del alto de un pincel plano, con la palabra en peso 700. Es como emphatiza un pintor de carteles. Nunca más de una por párrafo.

### Escala de pantalla (mockups)

Los bocetos de la app viven dentro de un marco de celular de 280px de ancho embebido en la página. Es un contexto de escala propio: la rampa de página no aplica adentro, porque un titular de 4rem no entra en una pantalla de teléfono dibujada a tamaño real. Esta sub-rampa es la que rige ahí adentro y no se usa fuera del marco.

- **Pantalla Número** (Chivo 900, 4.5rem, lh 0.8): el número que falta, dentro del boceto.
- **Pantalla Título** (Chivo 900, 1.5rem): encabezado de pantalla del boceto.
- **Pantalla Dato** (Chivo 900, 1.375rem): hora y cancha.
- **Pantalla Cifra** (Chivo 900, 1.25rem): goles en la tabla del boceto.

El cuerpo y los rótulos de adentro del marco usan los mismos pasos Body y Label de la página, sin achicarlos: un boceto ilegible no prueba nada.

### Named Rules

**La Regla del Pincel.** El carácter pintado viene de Bungee y de sus sombras duras. Prohibido resolverlo con una fuente cursiva tipo "handwriting" o script: un cartel de cancha se pinta con pincel plano y plantilla, no con caligrafía.

**La Regla del Viejo de 60.** Cuerpo mínimo 17px, targets táctiles mínimos de 48px, contraste mínimo AA sobre verde cancha. Es requisito funcional del producto, no una preferencia.

## Layout

Campo verde a sangre en todas las secciones; el ancho de contenido se limita a 1180px pero el color siempre llega al borde de la ventana. El rayado del césped cortado se aplica en una capa propia por sección, no por breakpoint: cada sección elige rayado vertical (franjas de 112px), rayado horizontal (franjas de 88px alternando con verde profundo), o campo plano. La orientación es una decisión de composición de esa sección y se mantiene en todos los anchos.

El orden de pintado dentro del documento es fijo y tiene sentido físico: primero el campo, después la línea de cal, después las placas. El césped está abajo, la cal está pintada sobre el césped, y las chapas se atornillan encima de las dos.

Ritmo de espaciado en escala 8: 8 / 16 / 28 / 48 / 88 / 136. Siempre más aire arriba de un encabezado que abajo. Las secciones respiran a `band` (136px) en desktop y `xl` (88px) en mobile.

**La línea de cal** es el elemento estructural que atraviesa el documento: un trazo blanco de 6px que nace en la línea de fondo del primer viewport —la misma sobre la que se apoya el boceto del celular—, serpentea hacia abajo cruzando todas las secciones, y muere clavado en el botón de la lista de espera del cierre. Los dos extremos están anclados al DOM (`data-hilo-inicio` y `data-hilo-fin`), no a coordenadas fijas: si el contenido cambia de alto, el trazo se recalcula. En desktop serpentea con el ancho del contenido; en mobile se endereza contra el margen izquierdo, por fuera de la caja de texto.

Las **líneas de fondo** horizontales (la del hero, la de la sección de bocetos) son elementos aparte del hilo: son la cal del piso sobre la que se apoyan los objetos, y por eso son rectángulos rectos y no parte del trazo SVG.

Breakpoints: 480 / 768 / 1024 / 1280. Mobile-first real — la composición se diseña primero en 390px de ancho, porque ahí es donde se usa.

## Elevation & Depth

Sin sombras difusas. Nunca. La profundidad es física: una placa de chapa atornillada sobre otra proyecta un bloque negro sólido corrido, y el borde de la chapa se ve como un canto de 2–3px más oscuro.

### Shadow Vocabulary
- **Sombra de letra** (`text-shadow: 6px 6px 0 #0A0F0C`): letras de pincel del rol display. Escala con el tamaño de fuente.
- **Sombra de placa** (`box-shadow: 8px 8px 0 #0A0F0C`): placas de chapa apoyadas sobre el campo.
- **Sombra de placa levantada** (`box-shadow: 12px 12px 0 #0A0F0C`): estado hover de una placa interactiva; la placa se desplaza -4px en ambos ejes.
- **Canto de chapa** (`inset 0 -3px 0 var(--color-canto)`): grosor del material en placas y botones. Las dos alfas del sistema —canto y sombra de apoyo— son tokens, nunca `rgba()` escrito a mano.

### Movimiento

Hay dos momentos autorados y nada más. Todo respeta `prefers-reduced-motion`.

- **La cuenta que llega a diez.** El número del primer viewport arranca en el mínimo y baja hasta los que faltan de verdad, con desaceleración exponencial. Sale del mecanismo del producto; no es una entrada decorativa.
- **El rodillo.** Las fichas se descubren de izquierda a derecha con `clip-path`, como una pasada de pintura, con un escalonado corto dentro de cada lista. Es la única gramática de aparición: no hay fade-and-rise, ni parallax, ni una entrada distinta por sección.

Dos reglas duras que salieron de errores reales de este build:

**La Regla del Contenido Primero.** El contenido es visible por defecto y el recorte lo agrega el JS antes del primer pintado. Si el script no corre, la página se lee igual. Una animación no puede ser la condición para que el contenido exista, y al imprimir todo va destapado.

**La Regla del Observado Distinto del Recortado.** El elemento que observa el `IntersectionObserver` nunca es el que lleva el `clip-path`: un elemento recortado a ancho cero le reporta al observer un área de cero, así que nunca se lo considera visible y jamás se destaparía. Son dos elementos, siempre.

### Named Rules

**La Regla de la Sombra Dura.** Todo `box-shadow` y `text-shadow` tiene blur 0. Un valor de blur mayor a cero es un bug del sistema, no una decisión.

## Imagery

La página lleva imagen en dos lugares y en ningún otro: la banda a sangre del partido de noche, y la foto del grupo dentro de la pantalla de la app.

**El medio es serigrafía, no fotografía.** Es el afiche impreso que está pegado al lado del cartel de chapa: mismo taller, mismas tintas, mismo pincel. La decisión se tomó contra una versión fotográfica anterior y el motivo es de sistema, no de gusto: la fotografía era el único elemento de la página con profundidad de campo, degradé y sombra difusa, y por lo tanto lo único que contradecía las tres reglas duras del mundo —tinta plana, borde duro, blur cero—. Una foto pega un parche de realidad sobre un cartel pintado; un afiche serigrafiado pertenece.

- **Tintas del sistema, nada más.** Las imágenes se separan en las mismas tintas planas de la paleta. Ninguna imagen introduce un color que el cartel no tenga.
- **El cielo de noche es Sombra (#0A0F0C), nunca azul.** El Veto de Boca no se suspende porque el elemento sea una imagen: si el cielo tira a navy, la imagen está mal y se regenera.
- **Trama de puntos, no degradé.** El tono se resuelve con halftone, que es cómo lo resuelve una serigrafía de verdad. Un degradé continuo dentro de una imagen es el mismo bug que un `blur` mayor a cero.
- **Registro corrido y grano de tinta.** Un desplazamiento de 1–2px entre separaciones y el grano del papel son la única textura autorizada del sistema. Es lo que evita que las tintas planas se lean como un vector muerto.
- **La luz se dibuja, no se difumina.** Las torres proyectan rayos geométricos de borde duro y una estrella de puntas rectas. Prohibido el glow.
- **Jugadores como siluetas macizas.** Pecheras de color plano sobre ropa despareja. Nada de camisetas de club, escudos, sponsors ni números.
- **La cara nunca es el asunto.** Media distancia, de espaldas o de perfil, rasgos reducidos a una o dos marcas. Vale para las dos imágenes, incluida la del grupo.
- **Nada de letras dentro de la imagen.** El texto de la página lo pone la chapa, no la ilustración.
- **Sobre la imagen sólo se apoya chapa:** una placa oscura con sombra dura, nunca texto suelto encima.

### Zona segura de recorte

Las dos imágenes se recortan con `object-cover` y ninguna se ve entera nunca. La composición se resuelve para el recorte, no para el archivo.

- **Banda del partido** (16:9): el `object-cover` recorta en los dos ejes según el viewport, y nunca se ve entera. Medido sobre el archivo real de 1376×768:

  | Viewport | Caja | Visible de la imagen |
  |---|---|---|
  | 390×844 | 390×523 | 42% del ancho, 100% del alto |
  | 768×1024 | 768×620 | 69% del ancho, 100% del alto |
  | 1440×900 | 1440×558 | 100% del ancho, 69% del alto (desde y=117) |
  | 1920×1080 | 1920×620 | 100% del ancho, 58% del alto (desde y=162) |

  De ahí salen las dos restricciones de composición. **En horizontal**, todo lo que importa vive en el 42% central: los tercios laterales llevan sólo césped, tejido y cielo. **En vertical**, la franja superior se pierde en desktop, así que el cielo no puede cargar información: los remates de las torres se recortan de fábrica y la escena tiene que sostenerse con los haces, el tejido y el campo. Lo que ancla la lectura —jugadores, pelota, arco— va en la banda central de altura.
- **Foto del grupo** (4:3): se muestra a unos 280px de ancho dentro del marco de celular. A ese tamaño el detalle no existe: si no se lee como silueta, no se lee. Las figuras vecinas se separan con negro; si se funden, la imagen está mal.

## Shapes

Chapa cortada: esquinas rectas o casi rectas (0–6px). Las placas rectangulares llevan cuatro remaches circulares de 10px en las esquinas, en Chapa Galvanizada con un punto de sombra. Las flechas son polígonos macizos pintados, con la punta triangular ancha típica de la señalética vial, nunca íconos de línea fina.

Los íconos se dibujan en la gramática del cartel: silueta maciza, un solo color plano, sin trazo variable, sin esquinas redondeadas. Una pelota es un círculo con los pentágonos recortados en negativo; un silbato es una silueta llena. Prohibida cualquier librería de íconos outline.

Hay una excepción con fundamento: lo que en el mundo real **es** una línea se dibuja con línea, de grosor uniforme y puntas rectas. La cancha y la red del arco son literalmente líneas pintadas y tejidas; un objeto tachado (el cartel de publicidad, el billete) también, porque en silueta maciza el tachado se convierte en una mancha ilegible. El resto va macizo.

## Components

- **Botón primario:** placa de chapa amarilla con texto negro, canto inferior oscuro y sombra dura de 8px. Hover: se corre -4px y la sombra crece a 12px, como si la chapa se despegara del cartel. Sin transiciones suaves largas: 90ms, curva escalonada.
- **Botón secundario:** placa verde profundo con texto cal y contorno de cal de 2px.
- **Input de mail:** rectángulo de cal con texto negro, borde negro de 3px, sin radio perceptible. Focus: contorno amarillo de 3px por fuera, sin glow.
- **Ficha:** la unidad de contenido de la página. Un ícono grande arriba y un nombre de dos a cuatro palabras abajo, con remaches y sombra dura. **No lleva párrafo.** La variante grande duplica su superficie y agranda el ícono en proporción, porque una chapa grande con un dibujo chico se lee como un error de imprenta.
- **Placa (card):** verde profundo o amarillo, remaches en las cuatro esquinas, sombra dura. Es el contenedor cuando hace falta más que una ficha; no existe la tarjeta blanca con sombra difusa.
- **Chips de asistencia:** VOY en amarillo, NO VOY en óxido, NO SÉ en chapa galvanizada. Rectangulares, en mayúsculas, con label tracking ancho.
- **Marco de mockup:** el celular se dibuja como un objeto apoyado sobre el campo, con sombra dura, nunca flotando ni inclinado en perspectiva 3D.
- **Nav:** barra de chapa fija arriba con la placa de marca remachada a la izquierda, anclas en label mayúscula al centro y la acción primaria a la derecha. En mobile las anclas se retiran y queda sólo marca + acción: un menú hamburguesa es exactamente la clase de vuelta que el usuario de referencia no maneja, y la página es corta y se recorre scrolleando. Nunca un panel deslizante con blur.

## Do's and Don'ts

**Do**
- Poner un solo número dominante por viewport, gigante.
- Nombrar con un ícono y dos palabras antes que explicar con un párrafo. Si una ficha necesita una frase para entenderse, el dibujo está mal elegido.
- Usar el verde a sangre en todos los bordes de la ventana.
- Dibujar el hilo de cal como un trazo continuo real en SVG, en coordenadas de página, nunca como una sucesión de bordes que simulan una línea.
- Escribir en la voz del cliente: rioplatense, corta, sin corporativismo.

**Don't**
- Nada de gradientes, glassmorphism, blur de fondo ni glow.
- Nada de sombras con blur.
- Nada de celular flotando en perspectiva sobre una mancha de color: ese es el cliché de la categoría que esta dirección refuta.
- Nada de fondo crema o papel como campo de página.
- Nada de azul junto al amarillo.
- Nada de íconos outline de librería, y nada de párrafo descriptivo debajo de cada ícono: eso es la tarjeta genérica de la categoría con otra ropa.
- No inventar métricas, precios, testimonios, descargas ni cantidad de usuarios. Las pantallas muestran el producto funcionando con datos de ejemplo; eso es material de diseño, no una afirmación comercial.
