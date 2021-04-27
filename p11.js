function validar(num){
 let conte = 0;
 for(let i = 1; i<=num; i++){
  if(i%3 == 0){
   console.log(i);
   conte++;
  }
 }
 return conte;
}
console.log("Ingresa hasta que numero: ");
let num;
process.stdin.on('data',function(data){
 num = data.toString();
 console.log("Hay "+validar(num)+" multiples de 3, del 1 al "+num);
 process.exit();
})
