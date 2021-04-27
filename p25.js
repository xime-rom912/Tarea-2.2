console.log("Ingresa un numero mayor o igual a 1");
let numero=0;
let romano="";
process.stdin.on('data',function(data){
 numero = data.toString().trim();
 if(numero < 5000 && numero >= 0){
  if(numero>=4000){
   romano+="IV";
   numero-=4000;
  }
  while (numero >= 1000){
   romano+="M";
   numero -= 1000;
  } 
  if (numero>= 900){
   romano+="CM";
   numero-=900;
  }
  if(numero>=500){
   romano+="D";
   numero-=500;
  }
  while(numero>=100){
   romano+="C";
   numero-=100;
  }
  if(numero>=90){
   romano+="XC";
   numero-=90;
  }
  if(numero >=50){
   romano+="L"
   numero-=50;
  }
  if(numero>=40){
   romano+="XL";
   numero-=40;
  }
  while(numero>=10){
   romano+="X";
   numero-=10;
  }
  if(numero==9){
   romano+="IX";
   numero-=9;
  }
  if(numero>=5){
   romano+="V";
   numero-=5;
  }
  if(numero==4){
   romano+="IV";
   numero-=4;
  }
  while(numero>0){
   romano+="I"
   numero-=1;
  }
  console.log(romano);
  process.exit();
 }
})

