function print(num1,num2){
 let men = 0, may = 0, total = 0, pares = 0, suma = 0;
 if(parseInt(num1)>=parseInt(num2)){
  men = parseInt(num2);
  may = parseInt(num1);
 }else{
  men=parseInt(num1);
  may=parseInt(num2);
 }
 for(let i = men; i <=may; i++){
  total++;
  if(i%2 == 0)
   pares++;
  else
   suma+=i;
 }
 console.log("Del "+men+" al "+may+" hay "+total+" numeros naturales, "+pares+" pares y la suma de los impares es "+suma);
}

console.log("Ingresa 2 numeros ");
let numero = [0,0];
let conte = 0;
process.stdin.on('data',function(data){
 numero[conte] = data.toString();
 if(conte == 1){
  print(numero[0],numero[1]);
  process.exit();
 }
 conte++;
})

