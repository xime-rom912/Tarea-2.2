function factorial(num){
 let fac = 1; 
 for(let i = parseInt(num);i>0;i--)
  fac = fac * i;
 return fac;
}

console.log("Ingresa un numero ");
var numero;
process.stdin.on('data',function(data){
 numero = data.toString();
 console.log(factorial(numero));
 process.exit();
})


