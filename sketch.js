const Engine = Matter .Engine;
const Bodies = Matter. Bodies;
const World = Matter.World;
var engine, world;
 var object1;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object1 = Bodies. rectangle(200, 100, 50, 50);
  World.add(world, object1);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect (object1.position.x, object1.position.y, 50,50);
  drawSprites();
}