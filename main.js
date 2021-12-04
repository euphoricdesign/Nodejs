// Node js es un ambiente asíncrono manejado por eventos que se disparan y en el que puedes correr javascript. 
// Esto quiere decir que en el backend puedes simplemente correr archivos de javascript que no están conectados con el navagdor, como
// el trádicional javascript.

// En este caso puedes correr javascript en el backend y no tienes un UI, simplemente tienes código de js que puedes correr. Si el cliente
// quiere hacer un pedido al backend este código tuyo puede correr en el backend y puede acceder a bases de datos, hacer transformaciones
// en javascript y utiliza bastante el formato de json y envía esto de regreso al cliente.

// Otra cosa muy importante que puedes hacer con node js es acceder al sistema, es decir puedes acceder a los APIs de tu computadora y hacer cambios
// internamente. Algunas cosas que puedes hacer son guardar archivos, cambiar archivos, podrías acceder a la cámara de tu computadora 
// si quisieras y muchas opciones más.

// Esa es la diferencia con un cliente en el que estas más restringido y no tienes mucho acceso a tu computador, simplemente tienes acceso a lo
// que el navegador te permite acceder.

// Node js es un ambiente que esta dormido normalmente hasta que tu lo despiertas cuando haces un pedido. Si es que tienes este ambiente corriendo
// y el front end no hace ningun pedido, este ambiente va a estar durmiendo, pero a penas el cliente hace un pedido el sistema despierta y
// empieza a correr tu código de js. 

// Imagina que muchos clientes están haciendo pedidos al backend. Lo interesante es que cada pedido va a empezar a correr código de javascript.
// A diferencia de otros sistemas node js fue creado con la idea de 'no bloquear'. Es decir si es que haces un pedido al backend, se dispara un
// evento y automaticamente empieza a correr js sin bloquear otros procesos y muchos eventos pueden crearse al mismo tiempo que no van a bloquear,
// esa es la idea de node js 