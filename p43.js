const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr, valor){
    switch (atr){
        case "name":
            obj.name = valor;
            break;
        case "lastName":
            obj.lastName = valor;
            break;
        case "direction":
            obj.direction = valor;
            break;
        case "state":
            obj.state = valor;
        default:
            throw 'No atribute found';
    }
}

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
    archivo.close();
}).on('close',()=>{
    leer.question("Ingrese la ID para modificar su entrada y luego ingrese el parámetro a modificar y su nuevo valor, todo separado por comas: ", (resp) => {
        let data = resp.split(',');
        processObj(map.get(data[0]),data[1],data[2]);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        leer.close();
    });
});
