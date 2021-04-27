function print(){
 let suma = 0;
 for(let i=1;i<=100;i+=2){
  console.log(i);
  suma++;
 }
 return suma;
}

let result = print();
console.log("Hay "+result+"  numeros impares");
