let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

let completado = {
    default: true,
    alias: 'c',
    desc: 'Descripción de la tarea por hacer'
};

const ARGV = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar de la lista', {
        borrador: {
            demand: true,
            alias: 'b',
            desc: 'Limpia tu base de datos'
        }
    })
    .help().argv

    module.exports = {
        ARGV
    }
