var calleImg;
var calle;
var pika, pikacorre;
var distance=0;
var fruta, fruta2, fruta3;
var fru, fra, fri;
var frutaGroup;
var gameState = "play";
var fin,finImg;
var pokeImg,pokeGroup;

function preload(){
    calleImg = loadImage("calle.jpg");

    pikacorre =loadAnimation("pika1.png","pika2.png","pika3.png");

    fru=loadImage("fruta.png");
    fra=loadImage("fruta2.png");
    fri=loadImage("fruta3.png");
    pokeImg=loadImage("poke.png");
    finImg=loadImage("fin.png")
}

function setup() {
 createCanvas(1200,500) //lienzo
 //mover fondo 
 calle =  createSprite(1000,170);
 calle.addImage(calleImg);
 calle.velocityX=-4
 calle.scale=1.5
//personaje
 pika = createSprite(100,300,100,50);
 pika.addAnimation("corre",pikacorre);
 pika.scale=0.4
 //colicion del personaje
 pika.setCollider("rectangle",70,50,150,250,90);
 pika.debug=true;
 //barra para no pasar en limite
 barra=createSprite(100,220,220,10);
 //nose
 frutaGroup=new Group();
 pokeGroup=new Group();
 //fin
 fin = createSprite(600,200);
 fin.addImage(finImg);
 fin.scale = 1.5;
 fin.visible = false; 

 
}

function draw() {
 
 drawSprites();

    fill("red")
    text(mouseX+","+mouseY,mouseX,mouseY);
    if(gameState==="play"){
        //background(200);
        //pika.velocityY=0;
    }
    if(pokeGroup.isTouching(pika)){
        pika.destroy();
      
        gameState="end"
      }
    if(gameState==="end"){
        fill("purple")
        textSize(50);
       text("gg",200,200);
    
    }
    if(calle.x< 0){
        calle.x=width/2;
    }
   
    pika.y = World.mouseY;
}

function pokel(){
    if(frameCount %200 === 0){
        var poker=createSprite(200,200)
        poker.Y= Math.round(random(440,930));
        poker.velocityX=2;
        poker=addImage(pokeImg)
        poker.lifetime=0;

    }
}