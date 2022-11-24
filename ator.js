// Codigo ator

let yAtor = 369;
let xAtor = 230;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 35, 35)
}

function movimentaAtor(){
  
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;   } 
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemNaves.length; i++){
    colisao = collideRectCircle(xNaves[i], yNaves[i], comprimentoNave, alturaNave, xAtor, yAtor, 30)
  if (colisao){
    somColisao.play();
    voltaAtorPosicaoIncicial(); 
    
    if (pontosMaiorQueZero()) {
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoIncicial(){
    yAtor = 369;
}

function incluiPontos(){
  stroke(255);
  textAlign (CENTER);
  fill(color(255,255,255))
  rect (68, 8, 23, 20);
  textSize(20);
  fill(color(0, 0, 0))
  text(meusPontos, 80, 25)
  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    somPonto.play();
    voltaAtorPosicaoIncicial();
    
  }
}
  
 function pontosMaiorQueZero(){
  return meusPontos > 0
 }

function podeSeMover(){
  return yAtor < 367;
}