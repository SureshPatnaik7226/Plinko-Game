//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 //world and engine variables
 var world, engine;
  //particles,plingoes,division arrays and ground variable
var plinkos = [];
var divisions = [];
var ground;

//division height and score
var divisionHeight=300;
var score =0;
var gameState = "play";
var particle;
var count = 0;
function setup() {
  //creating canvas
  createCanvas(800, 800);

  //creating engine and adding it to world
  engine = Engine.create();
  world = engine.world;

  //creating ground
  ground = new Ground(width/2,height,width,20);

  //for loop for making:
  //divisions
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   //plinkos
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    //plinkos
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

    //plinkos
     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    //plinkos
     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
 // changing background colour to black
  background("black");
  //making text size 20 and writting text score: and the score
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,650);
  text("500",100,650);
  text("500",180,650);
  text("500",260,650);
  text("100",340,650);
  text("100",420,650);
  text("100",500,650);
  text("200",580,650);
  text("200",660,650);
  text("200",740,650);

  //updating the engine
  Engine.update(engine);
 
  //displaying plingos
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   ground.display();
   //displaying particles

   //displaying divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     particle.display();

     if(particle.body.position.y > 760){

      if(particle.body.position.x > 301 && particle.body.position.x < 600){
        score = score + 100;
        particle = null;

        if(count >= 5){
          gameState = "end";
        }
      }else if(particle.body.position.x < 300){
         score = score + 500;
         particle = null;

         if(count >= 5){
           gameState = "end";
         }
        }else if(particle.body.position.x > 601 && particle.body.position.x < 900){
        score = score + 200;
        particle = null;

        if(count >= 5){
          gameState = "end";
        }
      }

     }
   }


   if(gameState === "end"){
     textSize(50);
    text("Game Over" , 400 , 300)
   }
}
function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX ,10 ,10 );
  }
}