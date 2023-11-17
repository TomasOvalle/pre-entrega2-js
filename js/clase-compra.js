class Compra {
    constructor(carritoDecompras) {
        this.carrito = carritoDecompras
    }
    obtenerSubtotal() {
        if (this.carrito.lenght > 0) {
            return this.carrito.reduce((acumulador, manga)=> acumulador + manga.precio, 0)
        }
    }
}