# Product

<!-- impeccable:product-schema 1 -->

> **Ejercicio de diseño con brief ficticio.** El cliente, el grupo, los apodos y la app son inventados para esta pieza. No hay cliente real, ni usuarios, ni producto en desarrollo. El documento está escrito en presente y en la voz del brief porque así se trabajó el ejercicio; leerlo como un encargo real sería un malentendido.

## Platform

web

## Users

**Usuario primario: el organizador del grupo.** El cliente del brief ("El Negro") es el que arma los partidos: fija día, hora y cancha, y persigue a los demás para saber si llegan a 10. Hoy lo hace en un grupo de WhatsApp donde la información se pierde entre mensajes y nunca sabe si van a ser 10 o 22.

**Usuario secundario: el jugador del grupo.** Solo necesita responder si va, ver cuántos hay anotados y votar el MVP después del partido.

**Restricción de audiencia confirmada y binding:** el padre del organizador, de 60 años, juega los sábados y apenas usa WhatsApp. Es el piso de usabilidad del producto: si él no lo puede usar sin ayuda, está mal diseñado. El brief repite esta exigencia dos veces.

**Momento de uso característico:** viernes a la tarde, en el celular, abriendo la app para ver en dos segundos quiénes van al partido y cuántos faltan para llegar a 10.

## Product Purpose

Reemplazar el grupo de WhatsApp como lugar donde se organizan los partidos de fútbol 5 de un grupo de amigos. El producto existe para que la respuesta a "¿somos 10?" sea inmediata y confiable, en vez de reconstruirla leyendo cien mensajes.

Éxito = el grupo llega al partido sabiendo de antemano quiénes juegan, y nadie se cuelga porque el aviso llegó el día anterior.

## Positioning

No es una app de gestión deportiva ni una liga: es la organización de **un grupo de amigos que ya existe**. Todo el producto está construido alrededor de un único número —cuántos anotados hay contra los 10 que hacen falta— y de la memoria del grupo: quién fue MVP, quién hizo goles, cómo salió el partido pasado. La rivalidad interna del grupo es la función, no un adorno.

## Operating Context

- El grupo ya existe hoy como grupo de WhatsApp. El producto lo reemplaza para organizar, no pretende reemplazar la charla.
- Ritual semanal: se arma el partido con días de anticipación, la gente se va anotando, el viernes/la víspera se confirma el número, se juega, y después se vota MVP y se cargan los goles.
- Mínimo jugable: 10 jugadores (5 contra 5). Techo observado: hasta 22 interesados.
- Uso en celular, en contextos de atención parcial (el laburo un viernes a la tarde, el grupo antes de salir).
- Convivencia inevitable con WhatsApp: el brief pide explícitamente que un eventual chat por partido no se mezcle ni compita con el chat del grupo.

## Capabilities and Constraints

**Confirmado en el brief (núcleo):**
- Grupos con dueño; el dueño agrega amigos al grupo.
- Partidos con día, hora y cancha; se ven los pasados y los que vienen.
- Confirmación de asistencia en tres estados: "voy", "no voy", "no sé todavía".
- Contador visible de anotados contra el mínimo de 10.
- Votación de MVP después del partido, entre los que jugaron.
- Registro de goles por jugador, acumulado, para ver quién anda mejor.
- Recordatorio el día anterior al partido.
- Perfil con foto y **apodo** — en este grupo nadie se llama por el nombre real.

**Opcionales del brief, resueltos por decisión del usuario:**
- A) Foto del equipo al terminar el partido → **entra al producto**.
- C) Sorteo automático de equipos → **entra al producto**.
- B) Ranking histórico de MVPs, D) reserva del tercer tiempo y E) chat por partido → **fuera**. No se muestran ni se mencionan: la landing no promete nada que no esté definido.

**Restricciones duras (el brief las enuncia como rechazos):**
- Nada complicado de usar. Es la restricción número uno y está repetida.
- Sin publicidad intercalada.
- Gratis al inicio. Monetización futura sin definir; no se puede afirmar un precio.
- Registro mínimo: mail y nombre. Nada de pedir cincuenta datos personales.

**Estado del producto:** la app **no existe todavía**. No hay código, ni backend, ni pantallas construidas, ni usuarios reales.

**Alcance de este proyecto (decidido con el usuario):** se diseña únicamente una **landing web de presentación de la app**, mobile-first, 100% frontend visual. Sin backend, sin APIs, sin funcionalidad más allá de lo visual. Sin registro, sin login, sin creación de cuenta en la landing. Las capacidades de la app se muestran promocionadas, con bocetos de cómo se verían las pantallas.

**Terminología del dominio (rioplatense, es la voz real del cliente):** los chicos, el partido, la cancha, anotarse, colgarse, quilombo, MVP, tercer tiempo, gallina.

**Nombre del producto:** **PICADO**. El brief nunca lo nombra; la marca se propuso en diseño y el usuario la eligió. "Picado" es la palabra que el propio grupo usa para el partido informal entre amigos, así que no necesita explicación para su audiencia.

## Brand Commitments

- **Nombre confirmado:** PICADO.
- **Voz:** la del cliente — rioplatense, informal, de grupo de amigos. Directa y sin corporativismo. En la landing la voz es de cartel: se nombra en dos o tres palabras y no se explica. El producto es simple y la página tiene que sentirse igual de simple; un párrafo describiendo cada función contradice el principio más importante del brief.
- **Restricción cromática volunteered por el cliente:** el cliente es de Boca (azul y amarillo) pero **descarta explícitamente** esa paleta por conflictiva dentro del grupo, y pide una dirección neutra futbolera, verde tipo pasto de cancha. Prohíbe expresamente el resultado "gris aburrido tipo Excel del laburo". Se registra como constraint del brief; la dirección visual se resuelve en new-work.
- **Sin identidad previa:** no hay nombre confirmado, logo, tipografía ni assets de marca existentes.

## Evidence on Hand

- `idea-cliente.pdf` — el brief original del cliente, dos páginas, escrito por él mismo. Es la única fuente de verdad del producto.
- **No hay:** capturas, screenshots, app funcionando, usuarios reales, testimonios, métricas de uso, descargas, prensa, logo ni fotos del grupo. Nada de esto puede fabricarse ni afirmarse en la landing. Cualquier imagen de pantalla que aparezca es un boceto de diseño y debe leerse como tal.
- El cliente se ofreció a probar lo que se le muestre junto al grupo.

## Product Principles

1. **El número manda.** Cuántos van y cuántos faltan para 10 es la información más importante del producto, y se lee en dos segundos. Todo lo demás es secundario.
2. **Si el viejo de 60 no lo puede usar, está mal.** La simplicidad no es una preferencia estética: es el requisito funcional más repetido del brief.
3. **Reemplazar el quilombo, no agregarle uno nuevo.** Cada cosa que el producto sume tiene que sacarle trabajo al grupo de WhatsApp, nunca duplicarlo.
4. **La memoria del grupo es el producto.** MVPs, goles y partidos pasados existen para alimentar la joda interna del grupo; ahí está el motivo para volver.
5. **Futbolero, no genérico.** El producto tiene que oler a cancha. Neutralidad no significa ausencia de carácter.

## Accessibility & Inclusion

Requisito específico del producto, derivado de un usuario real y no de un estándar genérico: usable sin asistencia por una persona de 60 años con alfabetización digital mínima (usa WhatsApp y poco más). Implica lenguaje llano, sin jerga de producto, targets grandes, contraste alto y cero dependencia de patrones de interacción aprendidos.
