
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper,binImg,bin;
var world;

function preload(){
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	bin = createSprite(1200,550,10,10);
	bin.addImage("label",binImg);
	bin.scale=0.7;

	paper = new Paper(300,300);

    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  drawSprites();
  paper.display();

  


  if(keyCode === UP_ARROW){
	paper.pvelocity();
 }
	
}
