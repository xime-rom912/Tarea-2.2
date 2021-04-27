function suma(num1,num2){
 return num1+num2;
}
function resta(num1,num2){
 return num1+num2;
}
function multi(num1,num2){
 return num1*num2;
}
function divi(num1,num2){
 if(num2 == 0)
  return "NO es posible dividir entre 0";
 return num1/num2;
}

var resp=[];
let cont = 0;
console.log("Menu: \n 1.Sumar\n 2.Restar \n 3.Multiplicar\n 4.Dividir\nIngresa un valor del 1 al 5 y posteriormente los 2 numeros con los que quieres trabajar");
process.stdin.on('data',function(data){
 resp[cont] = data.toString();
 if(cont == 2){
  switch(parseInt(resp[0])){
   case 1:
    console.log("La suma es "+suma(parseInt(resp[1]),parseInt(resp[2])));
    process.exit();
   break;
   case 2:
    console.log("La resta es "+resta(parseInt(resp[1]),parseInt(resp[2])));
    process.exit();
   break;
   case 3:
    console.log("La multiplicacion es "+multi(parseInt(resp[1]),parseInt(resp[2])));
    process.exit();
   break;
   case 4:
    console.log("La division es "+divi(parseInt(resp[1]),parseInt(resp[2])));
    process.exit();
   break;
  }
  cont = -1;
  console.log("Menu: \n 1.Sumar\n 2.Restar \n 3.Multiplicar\n 4.Dividir\nIngresa un valor del 1 al 4 y posteriormente los 2 numeros con los que quieres trabajar");
 }
 cont++;
})

