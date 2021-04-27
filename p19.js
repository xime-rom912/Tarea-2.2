console.log("Ingresa la hora, minutos y segundos ");
let hora = [];
let conte=0;
process.stdin.on('data',function(data){
 hora[conte] = data.toString().trim();
 if(conte == 2){
   for(let i = parseInt(hora[0]); i<24; i++){
    for(let j = parseInt(hora[1]); j<60;j++){
     for(let k = parseInt(hora[2]); k<60; k++){
      console.log("Hora: "+hora[0]+":"+hora[1]+":"+hora[2]);
      hora[2]++;
     }
     hora[2] = 0;
     hora[1]++;
    }
    hora[1] = 0;
    hora[2] = 0;
    hora[0]++;
   }
   process.exit();
 }
 conte++;
})

