var Adam,Chrono,Jota,Kartik,Shafer

var Kelly,Ellina

var AWM,Deagle,Buster

var Player

var levelUp,levelImg

var bulletR,bulletRImg,bulletL,bulletLImg

var bg,bgImg,wall,wallImg

var edgeT,edgeB,edgeL,edgeR

var shootBut,shootButImg

function preload(){
Adam =loadImage("Adam.png")
Chrono =loadImage("Chrono.png")
Jota=loadImage("Jota.png")
Kartik =loadImage("Kartik.png")
Shafer =loadImage("Shafer.png")

Kelly =loadImage("Kelly.png")
Ellina =loadImage("Ellina.png")

AWM =loadImage("Sks.png")
Deagle =loadImage("Deagle.png")
Buster =loadImage("Buster.png")

levelImg =loadImage("levelUp.png")

bulletRImg =loadImage("bulletRight.png")
bulletLImg =loadImage("bulletLeft.png")

bgImg =loadImage("bg1.png")

wallImg =loadImage("wall.jpeg")

shootButImg =loadImage("shootbutton.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bg =createSprite(width/2,height/2)
  bg.addImage("bgImg",bgImg)
  bg.scale =4;
   
 shootBut =createSprite()
shootBut.addImage("shoot",shootButImg)
shootBut.scale =0.3

edgeT =createSprite(width/2,-height*2.1,width*5,10)
edgeB =createSprite(width/2,height+1400,width*5,10)
edgeL =createSprite(-width*2,height/2,10,height*5)
edgeR =createSprite(width*3,height/2,10,height*5)

edgeT.visible =false
edgeB.visible =false
edgeL.visible =false
edgeR.visible =false

  Player =createSprite(400, 200, 50, 50);
Player.addImage("adam",Adam)
Player.addImage("Chrono",Chrono)
Player.addImage("Jota",Jota)
Player.addImage("Kartik",Kartik)

Player.scale =0.7

levelUp =createSprite()
levelUp.addImage("levelImg",levelImg)
levelUp.visible =false;




}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown(UP_ARROW)){
   Player.y =Player.y -114
  }
  if(keyDown(DOWN_ARROW)){
    Player.y =Player.y +114
   }
 
   if(keyDown(LEFT_ARROW)){
    Player.x =Player.x -114
   }
 
   if(keyDown(RIGHT_ARROW)){
    Player.x =Player.x +114
   }
 
if(mousePressedOver(shootBut)){

  bulletR =createSprite(Player.x +80,Player.y+48);
  bulletL =createSprite();
  bulletR.visible =true
  bulletL.visible =false
  bulletR.addImage("bulletRImg",bulletRImg)
  bulletL.addImage("bulletLImg",bulletLImg)
  bulletR.scale =0.1
  bulletR.velocityX =10
bulletR.lifetime =60
}

camera.position.x =Player.x
camera.position.y =Player.y

shootBut.x =Player.x +500
shootBut.y =Player.y +200

Player.collide(edgeT)
Player.collide(edgeB)
  Player.collide(edgeL)
  Player.collide(edgeR)

}