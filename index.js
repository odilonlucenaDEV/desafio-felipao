//Condicionais
let nick = "Dinei";
let xp = 6000;
let nivel;

//tela inicial
console.log(" Olá, bem-vindo " + nick + " podemos iniciar a sua jornada? ") ;
    
//ação
 
 
  if (xp <= 1000) {
    nivel = 'bronze' 
    console.log("Bronze"); 
  }
   
  if (xp >= 1001 && xp <= 2000){ 
    nivel = 'Prata' 
    console.log("Prata");
  }
    
  if (2001 <= xp && xp <= 5000){
    nivel = 'Ouro'
    console.log("Ouro");
  }
    
  if (5001 <= xp && xp <= 7000){
    nivel = 'Platina'
    console.log("Platina");
  }
    
  if (7001 <= xp && xp <= 8000){
    nivel = 'Ascendene'
    console.log("Ascendene");
  }
    
  if (8001 <= xp && xp <= 9000){
    nivel = 'Imortal'
    console.log("Imortal");
  }
    
  if (xp >= 10001){
    nivel = 'Radiante'
    console.log("Radiante");
  }
    

//saida
console.log (" O Herói " + nick + " está no nível " + nivel); 