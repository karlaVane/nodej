const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer'); //OBJETO
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log('listar');
        let lista = tareas.getLista();
        console.log('------------TAREAS------------'.green);
        for (let tarea of lista) {
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado} \n`);
        }
        console.log('----------------------------'.green);
        break;

    case 'actualizar':
        console.log('actualizar');
        let resp = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(resp);
        break;

    case 'borrar':
        console.log('borrar');
        let mensaje = tareas.borrar(argv.descripcion);
        console.log(mensaje);
        break;
    default:
        console.log('comando no reconocido');
}