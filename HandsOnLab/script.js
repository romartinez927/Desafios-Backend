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

// class TicketManager {
//     constructor() {
//         this.eventos = []
//     }

//     static PrecioBaseDeGanancia = 0.15

//     getEventos() {
//         return this.eventos
//     }

//     agregarEvento(evento) {
//         evento.precio += evento.precio * TicketManager.PrecioBaseDeGanancia
//         if (this.eventos.length === 0) {
//             evento.id = 1
//         } else {
//             evento.id = this.eventos[this.eventos.length - 1].id + 1
//         }
//         this.eventos.push(evento)
//         console.log(evento)
//         console.log(this.eventos)
//     }

//     agregarUsuario(idEvento, idUsuario){
//         const evento = this.eventos.find((e) => e.id === idEvento)
//         if (!evento) {
//             console.log("evento no encontrado")
//         }
//         const usuarioRegistrado = evento.participantes.includes(idUsuario)
//         if(usuarioRegistrado) {
//             console.log("usuario ya registrado")
//         } else {
//             evento.participantes.push(idUsuario)
//         }
//     }


//     ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
//         const evento = this.eventos.find((e) => e.id === idEvento)
//         if(!evento) {
//             console.log("evento no encontrado")
//         } else {
//             const nuevoEvento = {
//                 ...evento,
//                 lugar: nuevaLocalidad,
//                 fecha: nuevaFecha,
//                 id: this.eventos[this.eventos.length - 1].id +1,
//                 participantes: []
//             }
//             this.eventos.push(nuevoEvento)
//         }
//     }
// }


// class Evento {
//     constructor(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString) {
//         this.nombre = nombre
//         this.lugar = lugar
//         this.precio = precio
//         this.capacidad = capacidad
//         this.fecha = fecha
//         this.participantes = []
//     }
// }

// const manejadorEventos = new TicketManager();

// console.log('agregando Evento coder 1 para Argentina, precio: 200, para 50 participantes')
// manejadorEventos.agregarEvento(new Evento('Evento coder 1', 'Argentina', 200, 50));
// manejadorEventos.agregarEvento(new Evento('Evento coder 2', 'Argentinia', 400, 50));

// manejadorEventos.ponerEventoEnGira(1, 'Mexico', '30/11/2024');

// manejadorEventos.agregarUsuario(1, 2);
// manejadorEventos.agregarUsuario(2, 2);
// manejadorEventos.agregarUsuario(1, 2);

// console.log(manejadorEventos.getEventos());


// --------------------------------------------------

// CLASE 4 - HANDSONLAB

// Almacenar fecha y hora

// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola.
// Utilizar el módulo fs y sus operaciones de tipo callback.

// import fs from "fs"

// let fecha = new Date().toLocaleDateString()
// let hora = new Date().toLocaleTimeString()
// console.log(fecha)

// fs.writeFile("./fecha.txt", `Fecha: ${fecha}. Hora: ${hora}`, (error) => {
//     if(error) return console.log(error)

//     fs.readFile("./fecha.txt", "utf-8", (error, resultado) => {
//         if(error) return console.log(error)
//         console.log(resultado)
//     })

// })


// HANDSONLAB

// Lectura y escritura de archivos

// Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
// Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
// Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
// Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
// const info = {
//     contenidoStr: (contenido del archivo leído en formato string),
//     contenidoObj: (contenido del archivo leído en formato objeto),
//     size: (tamaño en bytes del archivo)
// }

// Muestre por consola el objeto info luego de leer el archivo
// Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
// Incluir el manejo de errores (con throw new Error)
// Utilizar el módulo promises de fs dentro de una función async/await y utilizar JSON.stringify + JSON.parse para poder hacer las transformaciones json->objeto y viceversa

// import fs from "fs"
// import { Blob } from "buffer"

// const manejadorArchivos = async() => {
//     const data = await fs.promises.readFile("./package.json", "utf-8")
//     const contenidoStr = data
//     const contenidoObj = JSON.parse(data)
//     const size = new Blob([data]).size

//     const info = {
//         contenidoStr,
//         contenidoObj,
//         size
//     }

//     console.log(info)
//     await fs.promises.writeFile("./info.json", JSON.stringify(info, null, 2))
// }

// manejadorArchivos()




// HANDS ON LAB
// Manager de usuarios

// ¿Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

// El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Edad
// Curso
// El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

// El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios

// import fs from "fs"

// export default class ManagerUsuarios {
//     constructor(path="./usuarios.json") {
//         this.path = path
//     }

//     crearUsuario = async(usuario) => {
//         const usuarios = await this.consultarUsuario()
//         usuarios.push(usuario)
//         await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 2))
//         return usuario
//     }

//     consultarUsuario = async() => {
//         if(!fs.existsSync(this.path)) {
//             console.log("no existen usuarios, aún")
//             return []
//         }
//         const data = await fs.promises.readFile(this.path, "utf-8")
//         const usuarios = JSON.parse(data)
//         return usuarios
//     }
// }

// const test = new ManagerUsuarios

// await test.crearUsuario({
//         nombre: "Gus",
//         apellido: "Tav",
//         edad: 21,
//         curso: 1
//     })

let aleatorio = Math.floor((Math.random() * (20 + 1)))
console.log(aleatorio)