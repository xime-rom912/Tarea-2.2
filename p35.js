function matriz(){
 let numeros =[[0,0,0,0,0],
	       [0,0,0,0,0],
	       [0,0,0,0,0],
               [0,0,0,0,0]];
 for(let i = 0; i<4;i++){
  for(let j = 0; j<5; j++){
   numeros[i][j] = Math.floor(Math.random() * 100) + 1;
  }
 }
 console.log(numeros);
}
matriz();
