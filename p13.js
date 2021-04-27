function suma(){
 let suma = 0;
 for(let i = 1; i<=100; i++)
  if(i%2 == 0 || i%3 == 0){
   console.log(i);
   suma++;
  }
 console.log("Hay "+suma+" multiplos de 2 y 3, del 1 al 100");
}

suma();

