const fs = require('fs');

let base = 2;

for (let i = 1; i <= 10; i++) {
    try {
        fs.appendFileSync(`tablas/tabla-${base}.txt`, `${base} * ${i} = ${base * i}\n`);
    } catch (err) {
        console.log('Error mientras escribe la data.');
    }
}