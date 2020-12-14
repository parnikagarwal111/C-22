//namespacing //renaming
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ball;
var ground;
function setup() {
  createCanvas(400,400);

  //create Engine
  engine=Engine.create();

  //interlinking world with engine so that it will follow physics rules
  world=engine.world;


  var ground_options={
    isStatic:true  //don't end with semicolon
  }

  //creating ground
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  var ball_options={
    restitution: 1.0
  }
  //creating body
  ball=Bodies.circle(100,100,50,ball_options);
  //adding body to the physics world
  World.add(world,ball);

  console.log(ball);
  console.log(ball.position.x);
  console.log(ball.position.y);


}

function draw() {
  background(0);  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50); //horizontal radius ,vertical radius

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
}