var ground;
var box1,box2,box3;
var paperObject;


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

	//Create the Bodies Here.
	box1 =createSprite(560,660,200,15);
	box1.shapeColor=color(255);

	box2=createSprite(455,610,10,100);
	box2.shapeColor=color(255);

	box3=createSprite(660,610,10,100);
	box3.shapeColor=color(255);



	//Create a Ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



