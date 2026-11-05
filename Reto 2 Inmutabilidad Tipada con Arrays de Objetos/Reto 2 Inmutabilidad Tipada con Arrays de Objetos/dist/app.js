// RETO 2: INMUTABILIDAD TIPADA CON ARRAYS DE OBJETOS
// 2. Creamos un array llamado misTareas de tipo Tarea[]
// Introducimos tres tareas iniciales
const misTareas = [
    {
        id: 1,
        titulo: 'Estudiar Angular',
        completada: false
    },
    {
        id: 2,
        titulo: 'Hacer ejercicios de TypeScript',
        completada: false
    },
    {
        id: 3,
        titulo: 'Repasar JavaScript',
        completada: true
    }
];
// 3. Creamos la función completarTarea
// Recibe una lista de tareas y el identificador de la tarea que queremos completar
// Devuelve un array nuevo de tipo Tarea[]
function completarTarea(lista, idBuscar) {
    // Utilizamos map() para recorrer la lista y crear un array nuevo
    return lista.map(tarea => {
        // Comprobamos si el identificador de la tarea coincide con el que buscamos
        if (tarea.id === idBuscar) {
            // Si coincide, creamos un objeto nuevo copiando sus propiedades
            // y cambiamos el estado de completada a true
            return {
                ...tarea,
                completada: true
            };
        }
        // Si no coincide, devolvemos la tarea sin modificarla
        return tarea;
    });
}
// 4. Llamamos a la función para completar la tarea con identificador 2
// Guardamos el resultado en un array nuevo llamado nuevasTareas
const nuevasTareas = completarTarea(misTareas, 2);
// 5. Mostramos por consola el array original
console.log('Lista original de tareas:');
console.log(misTareas);
// 6. Mostramos por consola el nuevo array con la tarea completada
console.log('Lista nueva de tareas:');
console.log(nuevasTareas);
export {};
//# sourceMappingURL=app.js.map