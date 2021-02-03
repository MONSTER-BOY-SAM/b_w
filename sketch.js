var bullet,wall;
var bulletspeed,bulletweight;
var damage;
var thickness;

function setup() {

  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white";

  thickness = random(22,83);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "pink";

  bulletspeed = random(223,321);
  bullet.velocityX = bulletspeed;
  bulletweight = random(30,52);

}

function draw() {
  background("black");  

  if(c(bullet,wall)){

    bullet.velocityX = 0;
    damage = (0.5*bulletweight*bulletspeed*bulletspeed)/(thickness*thickness*thickness)

    console.log(damage);

    if(damage > 10){

      wall.shapeColor = "red"

    }

    if(damage < 10){

      wall.shapeColor = "green";

    }

    //else if(damage < 180 && damage>100){

      //bullet.shapeColor = "yellow"

    //}

    //else {

      //bullet.shapeColor = "green"

    //}

  }

  drawSprites();
}

function c(b,w) {

  bre = b.x + b.width;
  wle = w.x;
  if(bre>=wle){

    return true

  }
  
  return false;

}