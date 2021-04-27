let cont = 0;
let caden = "";
for(let i = 0; i < 3; i++){
    caden += `------------Tabla ${i+1}------------\n`;
    for(let j = 0; j < 4; j++){
        for(let k = 0; k < 5; k++){
            caden += `${++cont}\t`;
        }
        caden += '\n';
    }
}

console.log(caden);
