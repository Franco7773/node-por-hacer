const ARGV = require('./config/yargs').ARGV;
const PORhacer = require('./por-hacer/por-hacer');
const CLRS = require('colors');


let comando = ARGV._[0];

switch (comando) {
    case 'crear':
        let tarea = PORhacer.crear(ARGV.descripcion);
        console.log(tarea);
        break;  
    case 'listar':
        let listado = PORhacer.getListado();

        for ( let tarea of listado) {
            console.log('=====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('==================='.green, '\n');
        }

        break;
    case 'actualizar':
        let actualizado = PORhacer.actualizar(ARGV.descripcion, ARGV.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = PORhacer.borrar(ARGV.borrador);
        console.log(borrado);
        break;
    default:
        console.log('Commando no es reconocido');
}