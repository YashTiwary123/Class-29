const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var upbtn;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  ball=Bodies.circle(200,50,30,{restitution:0.7});
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
upbtn=createImg("up.png");
upbtn.position(300,50);
upbtn.size(50,50);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}
function mousePressed(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.06});
}

