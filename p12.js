function suma(){
 let suma1 = 0, suma2 = 0;
 for(let i = 0; i<=100; i++){
  if(i%2 == 0)
   suma1+=i;
  else
  suma2+=i;
 }
 console.log("La suma de los pares es "+suma1);
 console.log("La suma de los impares es "+suma2);
}
suma();
