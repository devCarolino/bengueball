
function Sprite(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function (xCanvas, yCanvas) {
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
        
    }
}

var bg = new Sprite(0, 0, 600, 600),
    spriteBoneco = new Sprite(643, 27, 41, 40),

    perdeu = new Sprite(630, 604, 323, 223),
    jogar = new Sprite(633, 330, 305, 235),
    novo = new Sprite(219, 745, 341, 84),
    spriteRecord = new Sprite(381, 890, 397, 114),
    spriteChao = new Sprite(0, 547, 568, 55),


redObstacle = new Sprite(990, 952, 40, 113),
pinkObstacle = new Sprite(1070, 948, 41, 120),
blueObstacle = new Sprite(1149, 953, 45, 113),
greenObstacle = new Sprite(1224, 948, 40, 113),
yellowObstacle = new Sprite(1294, 949, 43, 112);

/*
154
160
155
157
147
 */