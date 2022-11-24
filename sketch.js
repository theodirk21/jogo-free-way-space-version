
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEspaco);
  mostraAtor();
  mostraNave();
  movimentaNave();
  movimentaAtor();
  voltaPosicaoInicialDaNave();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


