const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var plinko=[];
var particle=[];
var division=[];
var divisionHeight=300;
var score = 0;
var count = 0;
var particles;

var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,790,800,20);
  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var i=10;i<=800;i+=50){
    plinko.push(new Plinko(i,100,10));
  }
   for(i=30;i<=800;i+=50){
    plinko.push(new Plinko(i,200,10));
  }
  for( i=10;i<=800;i+=50){
    plinko.push(new Plinko(i,300,10));
  }
  
}
 


function draw() {
  background(0);
  Engine.update(engine);
  
  textSize(35)
  text("Score : "+score,20,40);
  fill(255);
  
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  
  ground.display();
  
  if ( gameState =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 100, 400);
  }
  
  for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
  for (var l = 0; l < plinko.length; l++) {
    plinko[l].display();
   }
  
  if(particles!=null)
    {
       particles.display();
        
        if (particles.pa.position.y>760)
        {
              if (particles.pa.position.x < 300) 
              {
                  score+=500;      
                  particles=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particles.pa.position.x < 600 && particles.pa.position.x > 301 ) 
              {
                    score += 100;
                    particles=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particles.pa.position.x < 900 && particles.pa.position.x > 601 )
              {
                    score += 200;
                    particles=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
     
//   if(frameCount%60===0){
//      particle.push(new Particle(random(width/2+400), random(height/2-100),8));
   
//    }
 
/* for (var j = 0; j < particle.length; j++) {
   
     particle[j].display();
   }*/
  
}

function mousePressed() {
    if(gameState === "PLAY") {
      count++;
      particles=new Particle(mouseX, 10, 10, 10);
      console.log(count);
    }
}