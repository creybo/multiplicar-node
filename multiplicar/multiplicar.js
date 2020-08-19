const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El parametro base [${ base }] no es un valor valido.`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            try {
                fs.appendFileSync(`tablas/tabla-${base}-al-${limite}.txt`, `${base} * ${i} = ${base * i}\n`);
            } catch (err) {
                reject(err);
            }
            resolve(`tabla-${base}-al-${limite}.txt`);
        }
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('===================='.green);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index}  = ${base * index}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}