//declaring the variables
var trex ,trex_running;
var edges;
var ground,groundImage;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create all the sprites
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running) 
 trex.scale = 0.5

 
 ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x=ground.width/2;
 edges=createEdgeSprites();
}

function draw(){
  background("white")
   ground.velocityX=-2;

if(ground.x<0)
{
  ground.x=ground.width/2;
}


  if(keyDown("space"))
  {
    trex.velocityY = -10
  }
  //assigning the gravity to trex
  trex.velocityY = trex.velocityY+0.5
  trex.collide(ground); 
  
  drawSprites();
  

}
