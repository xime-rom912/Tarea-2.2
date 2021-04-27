let variable = 0;
let salir;
console.log("Escribe 1 cuando ya no quieras poner frases")
process.stdin.on('data',function(data){
 salir = data.toString();
 if(salir == 1){
  console.log("Fueron "+variable+" frases en total");
  process.exit();
 }else
  variable++;
})

