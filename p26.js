console.log("Escribe una frase ");
var frase = "                                                                 ";
let longi;

process.stdin.on('data',function(data){
 frase += data.toString();
 console.log(frase);
 process.exit();
})

