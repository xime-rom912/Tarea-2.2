const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr, valor){
    switch (atr){
        case 'name':
            obj.name = valor;
            break;
        case 'last name':
            obj.lastName = valor;
            break;
        case 'direction':
            obj.direction = valor;
            break;
        case 'state':
            obj.state = valor;
        default:
            throw 'No atribute found';
    }
}

let lista = new Array();

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
    lista.push(obj);
    archivo.close();
}).on('close',()=>{
    leer.question("Introduce el estado ", (resp) => {
        let data = resp.split(',');
        let filtered = lista.filter(e => e.state.toLowerCase() === resp.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        leer.close();
    });
});
