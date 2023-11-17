const carrito = []

const mangas = [{codigo: 1, nombre: 'Bakemonogatari 1', precio: 12990},
                {codigo: 2, nombre: 'Bakemonogatari 2', precio: 12990},
                {codigo: 3, nombre: 'Slam Dunk 4', precio: 13990},
                {codigo: 4, nombre: 'Slam Dunk 7', precio: 13990},
                {codigo: 5, nombre: 'Vagabond 1', precio: 9490},
                {codigo: 6, nombre: 'Vagabond 5', precio: 9490},
                {codigo: 7, nombre: 'El jardín de las palabras', precio: 32990},
                {codigo: 8, nombre: 'Goblin Slayer 1', precio: 17490},
                {codigo: 9, nombre: 'Goblin Slayer 2', precio: 17490},
                {codigo: 10, nombre: 'Overlord 01: El Rey no Muerto', precio: 23990},
                {codigo: 11, nombre: 'Overlord 02: El Guerrero Oscuro', precio: 23990},
                {codigo: 12, nombre: '5 centímetros por segundo', precio: 25490}]


function buscarManga(codigo) {
    let mangaSeleccionado = mangas.find((manga)=> manga.codigo === codigo )
    return mangaSeleccionado
}

function comprar() {
    let codigo = prompt("Introduce el código del manga para agregarlo al carrito.\n")
    let mangaSeleccionado = buscarManga(parseInt(codigo))

    if (mangaSeleccionado !== undefined) {

        carrito.push(mangaSeleccionado)
        alert(mangaSeleccionado.nombre +  " se agregó al carrito")
        let respuesta = confirm("¿Desea agregar más productos ?")
        if (respuesta === true) {
            comprar()
        } else {
            console.clear()
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            console.log(" El valor de tu compra es: $", subtotal, "\nAgradecemos tu preferencia" )
        }
    } else {
        alert("HAZ COMETIDO UN ERROR AL INGRESAR EL CODIGO DEL MANGA. \nRefresca la página para volver a intentarlo")
    }
}