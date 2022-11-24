// codigo carro

let yNaves = [40, 104, 150, 215, 262, 300]
let xNaves = [500, 500, 500, 500, 500, 500]
let velocidadeNaves = [2, 4, 4.6, 5, 5.3, 7]
let comprimentoNave = 50
let alturaNave = 40


function mostraNave(){
  
  for (let i = 0; i < imagemNaves.length; i++){
    image(imagemNaves[i], xNaves[i], yNaves[i], comprimentoNave, alturaNave) 
  }
    
  

}

function movimentaNave(){
  for (let i = 0; i < imagemNaves.length; i++){
  xNaves[i] -= velocidadeNaves[i];
}
}

function voltaPosicaoInicialDaNave (){
  
  for (let i = 0; i < imagemNaves.length; i++) {
  
    if (passouDaTela(xNaves[i])){
    xNaves[i] = 500; 
  }
  
  }
  
}

function passouDaTela(xNave){
  return xNave < -45;
}

