function matriz(){
 let numeros =[[0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0]];
 let numeros2 =[[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
 for(let i = 0; i<4;i++){
  for(let j = 0; j<5; j++){
   numeros[i][j] = Math.floor(Math.random() * 100) + 1;
  }
 }
 console.log(numeros);
 console.log("------Matriz Transpuesta-----");
 for(let i = 0; i<5;i++){
  for(let j = 0; j<4; j++){
   numeros2[i][j] = numeros[j][i];
  }
 }
 console.log(numeros2);
}
matriz();

