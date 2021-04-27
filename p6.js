function print(num){
 for(let i=1; i<=num; i++)
  console.log(i);
}

console.log("Ingresa hasta que numero quieres imprimir: ");
var limite;
process.stdin.on('data',function(data){
 limite = data.toString();
 print(limite);
 process.exit();
})
