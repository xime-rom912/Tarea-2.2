function azar(){
 let varible = 0;
 variable = Math.floor(Math.random() * (2)) + 1;
 if(variable == 1)
  return "Cara";
 else
  return "Cruz";
}
console.log(azar());
