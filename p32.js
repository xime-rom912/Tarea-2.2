let nombres = [];
let conte = 0;
console.log("Ingresa 20 nombres: \n1:")

process.stdin.on('data',function(data){
 nombres[conte] = data.toString().trim();
 if (conte == 19){
  for(let i = 0; i<20; i++)
   console.log(nombres[i]);
  process.exit();
 }
 conte++;
 console.log(conte+1);
})

