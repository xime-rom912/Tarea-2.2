function print(num,num2){
 let conte = 0, suma = 0;
 for(let i = parseInt(num); i<=parseInt(num2); i++){
  if(i%2 == 0){
   console.log(i);
   suma+=i;
   conte++;
  }
 }
 console.log("De "+num+" a "+num2+" hay "+conte+" pares y su suma es "+suma);
}

console.log("Ingresa 2 numero, el segundo debe ser mayor/igual que el primero ");
var numero = [];
let conte = 0;

process.stdin.on('data',function(data){
 numero[conte] = data.toString().trim();
 if(conte == 1){
  if(parseInt(numero[1])>=parseInt(numero[0])){
    print(numero[0],numero[1]);
    process.exit();
  }
 }else
  conte++;
})


