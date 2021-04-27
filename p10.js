function validar(num){
 if((num%2) == 0)
  console.log("El numero ingresado es par");
 else
  console.log("El numero ingresado es impar");
}

console.log("Ingresa un numero: ");
let num;
process.stdin.on('data',function(data){
 num = data.toString();
 validar(num);
 process.exit();
})
