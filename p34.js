let calif = [10,8,9,5,10,7,9,3,4,9];
let buscar = 0, posi = 0, band = "no";
console.log("Ingresa la calificacion que quieres buscar")

process.stdin.on('data',function(data){
 buscar = parseInt(data);
 for(let i = 0; i<10; i++){
   if(buscar == calif[i]){
    posi = i;
    band = "si";
    break;
   }
 }
 console.log("EL valor "+band+" se encuentra y esta en la posicion "+posi);
 process.exit();
})


