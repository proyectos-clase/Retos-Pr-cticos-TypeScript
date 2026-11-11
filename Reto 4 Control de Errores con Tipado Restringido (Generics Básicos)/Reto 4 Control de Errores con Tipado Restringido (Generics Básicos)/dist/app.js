// Creamos la función
function procesarRespuesta(res) {
    if (res.status === 'success') {
        console.log('Todo correcto');
        if (res.data !== undefined) {
            res.data.forEach(nombre => {
                console.log(nombre);
            });
        }
    }
    else {
        console.log(res.mensajeError);
    }
}
// Respuesta correcta
const respuesta1 = {
    status: 'success',
    data: ['Juan', 'Maria', 'Pedro'],
    mensajeError: undefined
};
// Respuesta incorrecta
const respuesta2 = {
    status: 'error',
    data: undefined,
    mensajeError: 'Ha ocurrido un error'
};
// Probamos las respuestas
procesarRespuesta(respuesta1);
procesarRespuesta(respuesta2);
export {};
//# sourceMappingURL=app.js.map