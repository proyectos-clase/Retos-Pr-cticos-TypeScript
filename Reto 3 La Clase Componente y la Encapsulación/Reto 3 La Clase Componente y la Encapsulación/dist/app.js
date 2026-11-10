// RETO 3: LA CLASE COMPONENTE Y LA ENCAPSULACIÓN
// 1. Creamos la clase ProductComponent
class ProductComponent {
    nombre;
    precio;
    precioBase;
    iva = 0.21;
    nombreProducto;
    // 2. Constructor de la clase
    // Utilizamos el atajo de parámetros de TypeScript para declarar
    // e inicializar nombreProducto y precioBase directamente
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.nombreProducto = nombre;
        this.precioBase = precio;
    }
    // 3. Método público para calcular el precio final con IVA
    obtenerPrecioFinal() {
        // Multiplicamos el precio base por el IVA y lo sumamos
        return this.precioBase * (1 + this.iva);
    }
}
// 4. Creamos una instancia de la clase ProductComponent
const producto = new ProductComponent('Ordenador', 1000);
// 5. Mostramos el nombre del producto por consola
console.log('Nombre del producto:', producto.nombreProducto);
// 6. Mostramos el precio final con IVA incluido
console.log('Precio final con IVA:', producto.obtenerPrecioFinal(), '€');
// 7. Intentamos acceder al precio base desde fuera de la clase
// Esta línea provoca un error de TypeScript porque precioBase es private
console.log(producto.precioBase);
// 8. Intentamos modificar el precio base desde fuera
// También provoca un error porque precioBase es private
producto.precioBase = 500;
export {};
//# sourceMappingURL=app.js.map