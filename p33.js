let calif = [];
let conte = 0, suma = 0;
console.log("Ingresa las 10 calificaciones del alumno: \n1:")
process.stdin.on('data',function(data){
 calif[conte] = parseInt(data);
 if (conte == 9){
  for(let i = 0; i<10; i++){
   suma += calif[i];
  }
  console.log("La media de las calificaciones es "+(suma/10));
  process.exit();
 }
 conte++;
 console.log(conte+1);
})


