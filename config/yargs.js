const descripcion = {
    demand: true,
    alias: 'd',
    descr: 'Descripción de la tarea'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
}
const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion
    })
    .command('actualizar', 'actualizar una tarea', {
        descripcion
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .argv;

module.exports = {
    argv
}