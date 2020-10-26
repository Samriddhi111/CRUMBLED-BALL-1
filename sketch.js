
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinobj,paper,groundObject;


function preload()
{
	
}

function setup() {
  createCanvas(1600,700);

  engine=Engine.create();
  world = engine.world;
  
  dustbinobj=new dustbin(1200,650);
  paper=new Paper(300,450,40);
	groundObject=new ground(width/2,670,1600,20);


	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  groundObject.display();
  dustbinobj.display();

  drawSprites();
}
  function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}