console.log("Ingresa un numero mayor o igual a 1");
let numero=0;

process.stdin.on('data',function(data){
 numero = data.toString().trim();
 if(numero >= 0 && numero <=10){
  for(let i = 1;i<=10;i++)
   console.log(numero+" x "+i+" = " + (i*numero));
  process.exit();
 }
})
