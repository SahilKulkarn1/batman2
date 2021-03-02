const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var man,thunder;
var maxDrops =100;
var drops=[];
var rand;
var thunder1,thunder2,thunder3,thunder4;
var thunder;
function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    
    
    
}

function setup(){
   createCanvas(640,800);

    engine = Engine.create();
  world = engine.world;

   man= new Umbrella(300,670);
    
   if(frameCount % 100 ===0){
    for(var i=0; i<maxDrops ;i++){
        drops.push(new Drop(random(0,600),random(0,400)));
    }
   }

    
}

function draw(){
    background(0);

    Engine.update(engine);

    

    rand = Math.round(random(1,4));
    if(frameCount %10===0){
       

        
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        thunder.shapeColor="red";

        switch(rand){
           

            
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    
    

    man.display();
    for(var i=0; i<maxDrops ;i++){
        drops[i].display();
        drops[i].updateYPos();
    }

    drawSprites()
}  

