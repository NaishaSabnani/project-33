
var spriteRunning, spriteRunningImg
var spriteWalking, spriteWalkingImg
var bg, backgroundImg

function preload()
{
  bg="snow2.jpg"
  backgroundImg=loadImage(bg)
  spriteRunningImg=loadImage("winter-run-unscreen.gif")
  spriteWalkingImg=loadAnimation("winter-walk2-unscreen (1)-.gif")
}
f
function setup() {
  createCanvas(800,400);
  spriteWalking=createSprite(200, 200);
  spriteWalking.addImage(spriteWalkingImg)

  spriteRunning=createSprite(600,200)
  spriteRunning.addImage(spriteRunningImg)
}

function draw() {
  background(backgroundImg);  

  edges= createEdgeSprites();
  spriteWalking.collide(edges);
  spriteRunning.collide(edges)

  spriteRunning.velocityX=-1
  spriteWalking.velocityX=1

 if(spriteRunning.isTouching(edges))
  {
    spriteRunning.x=350
    spriteRunning.velocityX=-1

  }

  if(spriteWalking.isTouching(edges))
  {
    spriteWalking.x=50
    spriteWalking.velocityX=1

  }
  
  drawSprites();
}