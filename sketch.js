var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=5;
  movingRect.debug = true;

gameObject1 = createSprite(400, 800, 50, 50);
 gameObject1.shapeColor = "green";
 gameObject1.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
bounceOff(gameObject1,movingRect);


//  if( isTouching(movingRect,gameObject1)){
//   movingRect.shapeColor = "red";
//   gameObject1.shapeColor = "red";
//  }else{
//   movingRect.shapeColor = "green";
//   gameObject1.shapeColor = "green";
//  }
  drawSprites();
}
