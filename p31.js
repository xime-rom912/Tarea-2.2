function factorial(num){
 let fac = 1; 
 for(let i = parseInt(num);i>0;i--)
  fac = fac * i;
 return fac;
}

function primo(numero){
 let x = 0;
 if(numero > 1){
  for(let i = 2; i<=parseInt(numero);i++)
   if(numero%i == 0)
    x++;
  if(x == 1)
   return "Si es primo";
  else
   return "no es primo";
  process.exit();
 }else if (numero == 1){
  return "es primo";
 }
}
function tabla(numero){
 console.log("Tabla de multiplicar");
 if(numero >= 0 && numero <=10){
  for(let i = 1;i<=10;i++)
   console.log(numero+" x "+i+" = " + (i*numero));
 }
}
console.log("Ingresa un numero ");
var numero;
process.stdin.on('data',function(data){
 numero = data.toString().trim();
 console.log("El numero "+primo(numero));
 console.log("El factorial del numero es "+factorial(numero));
 tabla(numero);
 process.exit();
})
