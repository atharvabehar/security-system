var car , wall;
var speed , weight

function setup() {
  speed = random(55,90)
  weight = random(400,1500)
  createCanvas(1600,400);
 car=createSprite(50,200,105,50)
 wall=createSprite(1500,200,100,height/2);
 car.velocityX = speed
 
}

function draw() {
  background(0);  
  if(istouching(car,wall)){
    Deformation = 0.5*weight*speed*speed/22500
    car.velocityX = 0;
   
   if (Deformation<100){
 car.shapeColor = color(0,255,0)
   }
   if (Deformation<180 &&  Deformation>100 ){
car.shapeColor = color(230,230,0)
   }
   if (Deformation>180){
car.shapeColor = color(255,0,0)
   }
  }
  drawSprites();

}
function istouching(o1,o2){
  if (o1.x-o2.x < o1.width/2 + o2.width/2
    && o2.x - o1.x < o1.width/2 + o2.width/2
    && o1.y - o2.y < o1.height/2 + o2.height/2
    && o2.y - o1.y < o1.height/2 + o2.height/2 ){
      return  true;
    }else {
      return false
    }
    }
