const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var img;

function preload() {
    img=loadImage("sprites/bin.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    //bin = new Bin(700,320,150,50);
   

    ball = new Ball(100,100);

    slingshot = new Slingshot(ball.body,{x:200, y:100});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
    //bin.display();
    ground.display();
    ball.display();
    slingshot.display(); 
    image(img,700,240,150,150)  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}