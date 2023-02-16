// CLASE 0 - HANDSONLAB

// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), 
// mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. 
// Compartir la definición en el Visual Studio Code.

// let edad = 11
// let nombre = "ro"
// const series = [{nombre: "The office", año: 2008},
//                 {nombre: "The marias", año: 2015}
// ]

// console.log(edad, nombre)
// console.log(series)

// edad++
// nombre = "roman"
// let nuevaSerie = {nombre:"How i met", año: 2010}
// series.push(nuevaSerie)

// console.log(edad, nombre)
// console.log(series)

// --------------------------------------------------------------
// --------------------------------------------------------------

// const user = {name: "Manolo"}
// user.name = "Pepito"
// console.log(user)

// CLASE 1 - HANDS ON LAB
// En esta instancia de la clase realizaremos una función que corrobore elementos en una lista.

// FUNCIONES
// ¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
// Invocar la función con los casos de prueba.

// function mostrarLista(array) {
//     if (array.length === 0){ 
//         console.log("Lista vacía")
//     } else {
//         array.map(el => console.log(el))
//         console.log(`La lista cuenta con ${array.length} elementos`)
//     }
// }

// const mostrarLista = (array) => {
//     array.length === 0 ? console.log("Lista vacía") : (array.map(el => console.log(el)), console.log(`La lista cuenta con ${array.length} elementos`))
// }

// const miArray = []
// mostrarLista(miArray)

// const miArray2 = [{nombre: "The office", año: 2008},
//                 {nombre: "The marias", año: 2015}]
// mostrarLista(miArray2)

// HANDSONLAB 
// En esta instancia de la clase repasaremos cómo se crean las clases.

// Creación de una clase contador

// ¿Cómo lo hacemos? Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

// Definir clase Contador
// La clase se creará con un nombre, representando al responsable del contador.
// El contador debe inicializarse en 0
// Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
// Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
// Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
// Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
// Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
// Realizar prueba de individualidad entre las instancias.

// class Contador {
//     constructor(responsable){
//         this.responsable = responsable
//         this.contador = 0
//     }
//     static contadorGlobal = 0

//     getResponsable(responsable) {
//         return console.log(`El responsable del contador es ${responsable}`)
//     }
//     contar() {
//         this.contador++
//         Contador.contadorGlobal++
//     }
//     getCuentaIndividual() {
//         console.log(this.contador)
//         return this.contador
//     }
//     getCuentaGlobal() {
//         console.log(Contador.contadorGlobal)
//         return Contador.contadorGlobal
//     }
// }

// const test = new Contador
// const test2 = new Contador

// test.getResponsable("Pablito")
// test2.getResponsable("Pedrito")

// test.getCuentaIndividual()
// test.getCuentaGlobal()

// test2.getCuentaIndividual()
// test2.getCuentaGlobal()

// test.contar()
// test.contar()
// test.contar()
// test.contar()

// test2.contar()
// test2.contar()

// test.getCuentaIndividual()
// test.getCuentaGlobal()

// test2.getCuentaIndividual()
// test2.getCuentaGlobal()


// ----------------------------------------------

// CLASE 2 - HANDS ON LAB
// Utilización ES6-ES9

// Descripción de la actividad. 
// Dados los objetos indicados en la siguiente diapositiva:
// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

// const objetos =  [
// 	{
// 		manzanas:3,
// 		peras:2,
// 		carne:1,
// 		jugos:5,
// 		dulces:2
// 	},
// 	{
// 		manzanas:1,
// 		sandias:1,
// 		huevos:6,
// 		jugos:1,
// 		panes:4
// 	}
// ]

// const tiposDeProductos = []
// let totalProductos = 0

// for (let objeto of objetos) {
//     let keys = Object.keys(objeto)
//     keys.forEach((el) => tiposDeProductos.push(el))
// }

// // Esto pasa porque, primero hace un filter de todos los tipos de tiposDeProductos,
// // este metodo hace que lo que cumpla la condición, pase por el filtro.
// // Dentro de este filtro, la condicion es que, si el numero de indice coincide con el item, 
// // este pasa el filtro, (por ejemplo manzanas[0] === true), esto significa que si vuelve a aparecer
// // el nombre de manzanas (es decir, manzanas[6]), esto ya no sería verdadero, y no pasa el filtro.
// let result = tiposDeProductos.filter((item,index) => {
//     return tiposDeProductos.indexOf(item) === index
// })

// console.log(result)

// for (let objeto of objetos) {
//     let valores = Object.values(objeto)
//     // Con esto obtengo 2 array con solo los valores de los dos objetos
//     console.log(valores)
//     let total = valores.reduce((acc, el) => acc + el, 0)
    
//     // Así puedo sumar los totales que me den de los dos array
//     totalProductos += total
// }

// console.log(`El total de los productos es de ${totalProductos}`)




// HandsOnLab 
// Registrador de tickets de eventos
//     ¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

//     Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
//     La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
//     Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
//     Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
//     nombre
//     lugar
//     precio (deberá agregarse un 0.15 del valor original)
//     capacidad (50 por defecto)
//     fecha (hoy por defecto)
//     El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

//     Debe contar con un método “agregarUsuario” El cual recibirá:
//     id del evento (debe existir, agregar validaciones)
//     id del usuario
//     El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
//     Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
//     Debe contar con un método “ponerEventoEnGira” El cual recibirá:
//     id del evento
//     nueva localidad
//     nueva fecha
//     El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
    
