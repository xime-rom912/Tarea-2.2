console.log("Ingresa la frase ");
var frase = "";
let espacios = "", aux = "";
process.stdin.on('data',function(data){
 frase = data.toString();
 aux = frase;
 for(let i = 0; i<5;i++){
  console.log(aux);
  aux = " ";
  for(let i = 0; i<=(parseInt(frase.length)+4);i++) 
   espacios +=" "; 
  aux = espacios;
  aux += frase;
 }
 process.exit();
})
 
