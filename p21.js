function pares(){
 let sum = 0;
 for(let i = 1; i<=1000; i++){
  if(i%2 == 0)
   sum+=i;
 }
 return sum;
}
function impares(){
 let sum = 0;
 for(let i = 1; i<=1000; i++){
  if(!(i%2 == 0))
   sum+=i;
 }
 return sum;
}

console.log("La suma de los pares del 1 al 1000 es "+pares());
console.log("La suma de los impares del 1 al 1000 es "+impares());
