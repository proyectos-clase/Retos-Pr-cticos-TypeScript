
// Creamos la interfaz
interface RespuestaServidor {
    status: 'success' | 'error';
    data: string[] | undefined;
    mensajeError: string | undefined;
}

// Creamos la función
function procesarRespuesta(res: RespuestaServidor): void {

    if (res.status === 'success') {
        console.log('Todo correcto');

        if (res.data !== undefined) {
            res.data.forEach(nombre => {
                console.log(nombre);
            });
        }

    } else {
        console.log(res.mensajeError);
    }
}

// Respuesta correcta
const respuesta1: RespuestaServidor = {
    status: 'success',
    data: ['Juan', 'Maria', 'Pedro'],
    mensajeError: undefined
};

// Respuesta incorrecta
const respuesta2: RespuestaServidor = {
    status: 'error',
    data: undefined,
    mensajeError: 'Ha ocurrido un error'
};

// Probamos las respuestas
procesarRespuesta(respuesta1);
procesarRespuesta(respuesta2);
