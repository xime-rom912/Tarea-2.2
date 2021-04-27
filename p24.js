console.log("Ingresa un numero mayo o igual a 1");
let numero=0, x=0;

process.stdin.on('data',function(data){
 numero = data.toString();
 if(numero > 1){
  for(let i = 2; i<=parseInt(numero);i++)
   if(numero%i == 0)
    x++;
  if(x == 1)
   console.log("Si es primo");
  else
   console.log("No es primo")
  process.exit();
 }else if (numero == 1){
  console.log("Si es primo")
  process.exit();
 }
})

