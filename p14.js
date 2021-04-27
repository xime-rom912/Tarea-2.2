function print(numero){
 let may = 0, men = 0;
 may = numero[0];
 men = numero[0];
 for(let i=1; i<5; i++){ 
  if(parseInt(may)<=parseInt(numero[i]))
   may = numero[i];
  if(parseInt(men)>=parseInt(numero[i]))
   men = numero[i];
 }
 console.log("El numero mayor es "+may+" y el menor es "+men);
}

console.log("Ingresa 5 numeros ");
let numero = [0,0,0,0,0];
let conte = 0;
process.stdin.on('data',function(data){
 numero[conte] = data.toString();
 if(conte == 4){
  print(numero);
  process.exit();
 }
 conte++;
})

