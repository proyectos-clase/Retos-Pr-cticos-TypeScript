// RETO 5: CLASES HEREDADAS Y SUPER()
// Creamos la clase padre
class ServicioDatos {
    // Dirección del servidor
    endpoint;
    // Constructor que recibe la dirección
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    // Método para conectar con el servidor
    conectar() {
        console.log('Conectando a ' + this.endpoint);
    }
}
// Creamos la clase hija
class ServicioUsuarios extends ServicioDatos {
    // Nombre de la entidad
    entidad = 'usuarios';
    // Constructor de la clase hija
    constructor(endpoint) {
        // Llamamos al constructor de la clase padre
        super(endpoint);
    }
}
// Creamos un objeto de prueba
const servicio = new ServicioUsuarios('https://miapi.com');
// Mostramos los datos por consola
console.log('Entidad:', servicio.entidad);
// Ejecutamos el método conectar
servicio.conectar();
export {};
//# sourceMappingURL=app.js.map