let campos = [];
const Data = require('./Data');
const fs = require('fs');
let cont = 0;

console.log("Introduzca el ID, nombre, apellidos, direccion y el estado")

process.stdin.on('data',function(data){
 campos[cont] = data.toString().trim();
 if(cont == 4){
  let json = JSON.stringify(new Data(campos[0],campos[1],campos[2],campos[3],campos[4]));
  fs.writeFileSync('./DATOS.DAT',json);
  process.exit();
 }
 cont++;
})
