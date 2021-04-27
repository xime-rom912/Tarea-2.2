function azar(){
 let dado1 = 0, dato2 = 0, total = 0;
 for(let i = 0; i<100; i++){
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  console.log((parseInt(dado1)+ parseInt(dado2)));
  if ((parseInt(dado1)+ parseInt(dado2)) == 10)
   total++; 
 }
 console.log("Hubo "+total+" dieces en 100 tiradas de 2 dados");
}
azar();
