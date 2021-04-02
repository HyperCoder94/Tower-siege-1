const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var polygonImg, polygon;
var ground,stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var sling;



function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(750,690,1500,20);
    stand1 = new Ground(500,530,400,20);
    stand2 = new Ground(1100,400,380,20);

    box1 = new Box(450,500);
    box2 = new Box(480,500);
    box3 = new Box(510,500);
    box4 = new Box(540,500);
    box5 = new Box(570,500);
    box6 = new Box(600,500);
    box7 = new Box(630,500);
    box8 = new Box(420,500);
    box9 = new Box(390,500);
    box10 = new Box(360,500);
    box11 = new Box(450,510);
    box12 = new Box(480,510);
    box13 = new Box(510,510);
    box14 = new Box(540,510);
    box15 = new Box(570,510);
    box16 = new Box(600,510);
    box17 = new Box(420,510);
    box18 = new Box(390,510);
    box19 = new Box(450,520);
    box20 = new Box(480,520);
    box21 = new Box(510,520);
    box22 = new Box(540,520);
    box23 = new Box(570,520);
    box24 = new Box(420,520);
    box25 = new Box(450,490);
    box26 = new Box(480,490);
    box27 = new Box(510,490);
    box28 = new Box(540,490);
    box29 = new Box(480,480);
    box30 = new Box(510,480);   
      
    box31 = new Box(970,370);
    box32 = new Box(1000,370);
    box33 = new Box(1030,370);
    box34 = new Box(1060,370);
    box35 = new Box(1090,370);
    box36 = new Box(1120,370);
    box37 = new Box(1150,370);
    box38 = new Box(1180,370);
    box39 = new Box(1210,370);
    box40 = new Box(1240,370);

    
    box41 = new Box(1000,360);
    box42 = new Box(1030,360);
    box43 = new Box(1060,360);
    box44 = new Box(1090,360);
    box45 = new Box(1120,360);
    box46 = new Box(1150,360);
    box47 = new Box(1180,360);
    box48 = new Box(1210,360);

    box49 = new Box(1030,350);
    box50 = new Box(1060,350);
    box51 = new Box(1090,350);
    box52 = new Box(1120,350);
    box53 = new Box(1150,350);
    box54 = new Box(1180,350);

    box55 = new Box(1060,340);
    box56 = new Box(1090,340);
    box57 = new Box(1120,340);
    box58 = new Box(1150,340);

    box59 = new Box(1090,330);
    box60 = new Box(1120,330);

   

    polygon = Bodies.circle(120,400,0.2)
    World.add(world, polygon);

    sling = new SlingShot(this.polygon,{x:120,y:400});
   

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1500,
          height: 700,
          wireframes: false
        }
      });
        
        Engine.run(engine);

}

function draw(){
    background("grey");
   // Engine.update(engine);
    
    ground.display();
    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();

    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
  
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
  
    box55.display();
    box56.display();
    box57.display();
    box58.display();
  
    box59.display();
    box60.display();

    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,50,55);

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();

}