
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1

  ground = createSprite(0,340,2000,20);
  ground.velocityX = -6
  
  FoodGroup = new Group;
  
  obstacleGroup = new Group;
  
  score = 0
  
}

function draw() {

  background(256);
  
  text("Survival Time: "+ score, 300,50);
  
  score = score + Math.round(getFrameRate()/60);
  
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  if (ground.x<300){
    ground.x = 600
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  banana();
  monkey.collide(ground);
  drawSprites();
}

function banana(){
  //banana = createSprite(0,200,10,10)
  if (frameCount % 80 === 0){
   var banana = createSprite(600,math.round(random(120,200)),10,40);
   banana.velocityX = -6;
   banana.addImage("banana",bananaImage);
   banana.scale = 0.1; 
  }
}

function banana(){
  //banana = createSprite(0,200,10,10)
  if (frameCount % 60 === 0){
   var banana = createSprite(600,165,10,40);
   banana.velocityX = -6;
   banana.addImage("banana",bananaImage);
   banana.scale = 0.1; 
   FoodGroup.add(banana) 
  
  }

}

function obstacle(){
  //banana = createSprite(0,200,10,10)
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,315,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.scale = 0.1; 
   obstacleGroup.add(obstacle);
    
  }

}
