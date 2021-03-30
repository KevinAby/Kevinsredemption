var top

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
     top = new Top(150,300,30,400)

	Engine.run(engine);
  

}


function draw() {
 
  background(0);
  

  top.display()

  drawSprites();
 
}



