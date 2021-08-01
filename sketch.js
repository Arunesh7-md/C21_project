bg,bath,gym,drink,eat,move,sleep;
Astronaut;

function preload(){
   bg = loadImage("iss.png");
   bath = loadImage("bath1.png","bath2.png");   
   gym = loadImage("gym1.png","gym2.png","gym11.png","gym12.png");
   drink = loadImage("drink1.png","drink2.png");
   eat = loadImage("eat1.png","eat2.png");
   move = loadImage("move.png","move1.png");
   sleep = loadImage("sleep.png");
}


function setup() {
  createCanvas(400, 400);
  Astronaut = createSprite(300,230)
  Astronaut.addAnimation("sleeping",sleep)
  Astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  text("UP_ARROW = Brushing")
  text("DOWN_ARROW = Gymming")
  text("LEFT_ARROW = Eating")
  text("RIGHT_ARROW = Bathing")
  text("M_key = Moving")
}