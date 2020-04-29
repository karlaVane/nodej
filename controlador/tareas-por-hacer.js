const fs = require('fs');

let tareasporhacer = [];

const cargarDB = () => {
    try {
        tareasporhacer = require('../modelo/data.json');
    } catch (error) {
        tareasporhacer = []
    }
}
const guardarDB = () => {
    let data = JSON.stringify(tareasporhacer);
    fs.writeFile('modelo/data.json', data, (err) => {
        if (err) throw new Error('No se guardo la data', err);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    }

    tareasporhacer.push(tarea);
    guardarDB();
    return tarea;
}

//listar

const getLista = () => {
    cargarDB()
    return tareasporhacer
}

//actualizar

const actualizar = (descripcion, completado = true) => {
        cargarDB();
        let index = tareasporhacer.findIndex(tarea => tarea.descripcion === descripcion); //encontrar index
        if (index >= 0) { //encontro una tarea con descripcion ingresada
            tareasporhacer[index].completado = completado;
            guardarDB();
            return true;
        }
        return false;
    }
    /*
    const borrar = (descripcion) => {
        cargarDB();
        let index = tareasporhacer.findIndex(tarea => tarea.descripcion === descripcion); //encontrar index
        if (index >= 0) { //encontro una tarea con descripcion ingresada
            tareasporhacer[index].completado = "";
            tareasporhacer[index].descripcion = "";
            guardarDB();
        }
        return tareasporhacer[index];
    */
const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = tareasporhacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasporhacer.length === nuevolistado.length) {
        return false;
    } else {
        tareasporhacer = nuevolistado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}