console.log("Ingresa S o N ");
var variable;

process.stdin.on('data',function(data){
 variable = data.toString().trim();
 variable = variable.toUpperCase();
 if(variable.toString() == 'S'|| variable.toString() == 'N')
   process.exit();
})

