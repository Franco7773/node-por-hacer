const FS = require('fs');

let listadoPorHacer = [];

let guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    FS.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

let cargarDB = () => {

    try {
        
        listadoPorHacer = require('../DB/data.json');
    } catch (err) {

        listadoPorHacer = [];
    }
}

let crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

let getListado = () => {

    cargarDB();    
    return  listadoPorHacer;
}

let actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if ( index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

let borrar = (desc) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== desc);

    if ( listadoPorHacer.length === nuevoListado.length ) {

        console.log('No existe');
        return false;
    } else {

        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
