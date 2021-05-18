const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Grnd = new ground(width/2,height,width,20);


  for (var k = 0;k <= width ; k = k + 80) {
    divisions.push(new division(k, height-divisionHeight/2,10,divisionHeight))
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new plinko(j,175));
  }
  
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new plinko(j,375));
  }
  
}

function draw() {
  background("black");
  Engine.update(engine);
  Grnd.display();  
  
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new particle(random(100, 700), 10,10));
    score++;
  }

   for (var j = 0; j < particles.length; j++){
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
}