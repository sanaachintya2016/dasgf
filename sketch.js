var grid = 50;
var car,log;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 carAnimation = loadAnimation("images/car1.png")
 
}

function setup() {
  createCanvas(1366,2700);



carGroup1 = new Group();
logGroup1 = new Group();

log = new Log()
logGroup1.add(log.spt)


}

function draw() {
  background("skyblue");
  for (var i= 0; i<6;i++){
  var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
  if(i%2==0)
  {
    var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
    road.shapeColor="black";
  }
bottomGrass1.shapeColor="grey"
  }
for (var i = 0; i<40;i++){
  car = new Car(2)
  car.spt.addAnimation("dfasjh",carAnimation)
  car.spt.scale=0.05
  carGroup1.add(car.spt)

}
  

  drawSprites();
}

