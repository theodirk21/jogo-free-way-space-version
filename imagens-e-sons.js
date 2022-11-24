//

let imagemDaEspaco;
let imagemDoAtor;
let imagemNave1;
let imagemNave2;
let imagemNave3;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemEspaco = loadImage("imagens/espaco.jpg")
  imagemDoAtor = loadImage("imagens/ator1.png")
  imagemNave1 = loadImage("imagens/nave1.png")
   imagemNave2 = loadImage("imagens/nave2.png")
   imagemNave3 = loadImage("imagens/nave3.png")
  imagemNaves = [imagemNave1, imagemNave2, imagemNave3, imagemNave1, imagemNave2, imagemNave3]


  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}