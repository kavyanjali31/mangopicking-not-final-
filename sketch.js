
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree;
var ground;
var stone;
var boy;
var slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6

function preload()
{
  	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     tree=new Tree(300,200,20,20);
	 ground=new Ground(300,200,80,200);
	 stone=new Stone(200,350,80,200);
	 boy=new Boy(300,450,20,20);
   mango1=new Mango(700,400,0.1);
   mango2=new Mango(650,450,0.1);
   mango3=new Mango(750,480,0.1);
   mango4=new Mango(700,530,0.1);
   mango5=new Mango(650,580,0.1);
   slingshot=new Slingshot(stone.body,{x:150,y:580})
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  keypressed();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  slingshot.fly()
  }
function detectollision(stone,mango1){
mangoBodyPosition=mango1.body.position
stoneBodyPosition=stone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-mango1.r+stone.r){
Matter.Body.setStatic(mango1.body,false);
}
}
function detectollision(stone,mango2){
  mangoBodyPosition=mango2.body.position
  stoneBodyPosition=stone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<-mango2.r+stone.r){
  Matter.Body.setStatic(mango2.body,false);
  }
  }
  function detectollision(stone,mango3){
    mangoBodyPosition=mango3.body.position
    stoneBodyPosition=stone.body.position
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<-mango3.r+stone.r){
    Matter.Body.setStatic(mango3.body,false);
    }    
    }
    function detectollision(stone,mango4){
      mangoBodyPosition=mango4.body.position
      stoneBodyPosition=stone.body.position
      var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
      if(distance<-mango4.r+stone.r){
      Matter.Body.setStatic(mango4.body,false);
      }     
    }
    function detectollision(stone,mango5){
      mangoBodyPosition=mango5.body.position
      stoneBodyPosition=stone.body.position
      var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
      if(distance<-mango5.r+stone.r){
      Matter.Body.setStatic(mango5.body,false);
      }     
    }
function keypressed(){
  if(keyCode===32){
Matter.Body.setPosition(stoneobj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body);
  }
}