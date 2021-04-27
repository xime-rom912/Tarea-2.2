const fs = require('fs');
const readline = require('readline');
let map = new Map();

const leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const archivo = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});
archivo.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);
    leer.question('Indroduzca el ID que quiere eliminar ', (resp) => {
        map.delete(resp);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        leer.close();
    });
});
