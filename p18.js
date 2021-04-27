console.log("Escribe una frase y la letra que quiere buscar");
var frase = [];
let conte = 0, apar = 0;
process.stdin.on('data',function(data){
 frase[conte] = data.toString().trim();
 if(conte == 1){
  for(let i = 0; i<frase[0].length;i++){
   if(frase[0].toString().charAt(i) == frase[1].toString())
    apar++;
  }
  console.log("La letra "+frase[1]+" aparece "+ apar+ " veces");
  process.exit();
 }
conte++;
})

