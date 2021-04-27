function validar(num){
 if(num<0)
  console.log("El numero ingresado es negativo");
 else
  console.log("El numero ingresado es positivo");
}

console.log("Ingresa un numero: ");
let num;

process.stdin.on('data',function(data){
 num = data.toString();
 validar(num);
 process.exit();
})
