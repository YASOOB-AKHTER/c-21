var wall,thickness;
var bullet,speed,weight;
var bulletrightEdge;
var wallleftEdge;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="red";
  bullet=createSprite(50,200,60,60);
  bullet.velocityX=speed;
}

function draw() {
  background(25);  
  drawSprites();
  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    }
  
    
}
function hascollided(lbullet,lwall){
bulletrightEdge=lbullet.x+lbullet.width;
wallleftEdge=lwall.x;
if(bulletrightEdge>=wallleftEdge){
  return true
}
return false;
}
