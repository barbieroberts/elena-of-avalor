var ground,  groundImage;

var score=0;
var PLAY = 1;
var END = 0
var gameState = PLAY;

var elena,elenaImg;
var mattel,mattelImg;
var gabe,gabeImg;
var naomi,naomiImg;
var isabel,isabelImg;
var restart,restartImg
var gameOver,gameOverImg

var ash;
var victor;
var carla;
var sheriky;
var animals;
var animals2;
var thief;
var enemy;
var puzzle1;
var puzzle2;



function preload()
{       
        //background
        groundImage=loadImage("eci/bgim1.jpg");

        gameOverImg =loadImage("eci/gameOver.png");
        restartImg =loadImage("eci/restart.png");

        //heros
        elenaImg =loadImage("eci/elena.png");
        mattelImg = loadImage("eci/mattel.png");
        gabeImg = loadImage("eci/gabe.png");
        naomiImg = loadImage("eci/Naomi.png");
        isabelImg = loadImage("eci/isabel.png");

        //villans
        carla =loadImage("eci/carla.png");
        victor =loadImage("eci/victor.png");
        ash = loadImage("eci/ash.png");
        sheriky = loadImage("eci/sheriky.png");
        animals =loadImage("eci/hyna.png");
        animals2 = loadImage("eci/tiger.png")
        thief = loadImage("eci/theif.png");
        puzzle1 = loadImage("eci/puzzle1.png");
        puzzle2 = loadImage("eci/puzzle2.png");
       
}

function setup()
{
   // canvas    
  createCanvas(800,800);

  //background
  ground = createSprite(400,400,800,2000);
  ground.velocityY = -6
  ground.addImage("ground",groundImage);
  ground.scale= 0.8;

  //elena
  elena = createSprite(400,690,80,80);
  elena.shapeColor = "red";
  elena.addImage("elenar",elenaImg);
  elena.scale= 0.5;

  //mattel
  mattel = createSprite(460,705,80,80);
  mattel.shapeColor = "red";
  mattel.addImage("mattel",mattelImg);
  mattel.scale = 0.2;

  //gabe
  gabe = createSprite(250,670,80,80);
  gabe.shapeColor = "red";
  gabe.addImage("gabe",gabeImg);
  gabe.scale =  0.45;

  //naomi
  naomi = createSprite(330,695,80,80);
  naomi.shapeColor = "red";
  naomi.addImage("naomi",naomiImg);
  naomi.scale = 0.3;

  //isabel
  isabel = createSprite(540,700,80,80);
  isabel.shapeColor = "red";
  isabel.addImage("isabel",isabelImg);
  isabel.scale = 0.3;

  //restart
  restart = createSprite(400,400,80,80);
  restart.addImage("restart",restartImg);
  restart.scale = 0.3;
  restart.visible= false;
         
  //gameover
  gameOver = createSprite(400,470,80,80);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.scale = 0.3;
  gameOver.visible = false;

  //creating vilan group
  thiefGroup = new Group();
  sherikyGroup = new Group();
  carlaGroup = new Group();
  victorGroup = new Group();
  ashGroup = new Group();
  hynaGroup = new Group(); 
  puzzle1Group = new Group();
  puzzle2Group = new Group();
  tigerGroup = new Group();

};

function draw() 
{
       
        
        //background colour
         background("pink");
  if(gameState === PLAY)
  {
        if (ground.y < 0)
        {
            ground.y = 500 ;
        };
        
        //thief visble
        if(thief.visible = true) {
        gabethief();

        }

        if(animals.visible = true) {
        naomihyna();

        }
        if(animals2.visible = true) {
      naomitiger();

        }
        if(sheriky.visible = true) {
        elenasheriky();

        }
        if(puzzle1.visible = true) {
        isabelpuzzle1();

        }
        if(puzzle2.visible = true) {
        isabelpuzzle2();

        }
        if(ash.visible = true) {
        mattelash();

        }
        if(victor.visible = true) {
        mattelvictor();

        }
        if(carla.visible = true) {
        mattelcarla();

        }

        if(score === 200){
        gameState = END;

        }

        // call of spawn obstacles
        spawnObstacles();
        drawSprites();

  }
      
  else if (gameState === END)
  {
          restart.visible= true;
          gameOver.visible = true;
          if(mousePressedOver(restart))
          {
                  reset();
          }
          
  }   



   textSize(25);
   stroke("white")
   fill("black")
   text("score:"+score,680,20);
        
}

function gabethief(){
        if( mousePressedOver(gabe)){
                buttongabe();
            }
}
function isabelpuzzle1(){
        if( mousePressedOver(isabel)){
                buttonisabel1();
            }
}
function isabelpuzzle2(){
        if( mousePressedOver(isabel)){
                buttonisabel2();
            }
}
function naomihyna(){
        if( mousePressedOver(naomi)){
                buttonnaomi();
            }
}
function naomitiger(){
        if( mousePressedOver(naomi)){
                buttonnaomi2();
            }
}
function mattelash(){
        if( mousePressedOver(mattel)){
                buttonmattel1();
            }
}
function mattelcarla(){
        if( mousePressedOver(mattel)){
                buttonmattel2();
            }
}
function mattelvictor(){
        if( mousePressedOver(mattel)){
                buttonmattel3();
            }
}
function elenasheriky(){
        if( mousePressedOver(elena)){
                buttonelena();
            }
}
function spawnObstacles() 
{
      
  if(frameCount % 60 === 0) 
  {
        enemy = createSprite(Math.round(random(300,500)),150,10,40);
        enemy.velocityY = 2;

         var rand = Math.round(random(1,9));
    switch(rand) 
    {
      case 1: enemy.addImage("carlaimg",carla);
              carlaGroup.add(enemy);
              enemy.scale = 0.5
              break;
      case 2: enemy.addImage("victorimg",victor);
              enemy.scale = 0.4
              victorGroup.add(enemy);
              break;
      case 3: enemy.addImage("ashimg",ash);
              enemy.scale = 0.4
              ashGroup.add(enemy);
              break;
      case 4: enemy.addImage("sherikyimg",sheriky);
              enemy.scale = 0.06;
              sherikyGroup.add(enemy);
              break;
      case 5: enemy.addImage("thiefimg",thief);
              enemy.scale = 0.2;
              thiefGroup.add(enemy);
              break;
      case 6: enemy.addImage("hynaImg",animals);
              hynaGroup.add(enemy);
              enemy.scale = 0.5
              break;
      case 7: enemy.addImage("p1",puzzle1);
              puzzle1Group.add(enemy);
              enemy.scale = 0.5
              break; 
      case 8: enemy.addImage("p2",puzzle2);
              puzzle2Group.add(enemy);
              enemy.scale = 0.5
              break; 
      case 9: enemy.addImage("tiger1",animals2);
              tigerGroup.add(enemy);
              enemy.scale = 0.10
              break;     
      default: break;
    }; 
  };
};

function buttongabe()
{
   thiefGroup.destroyEach();
   score += 1;

}
function buttonelena(){
        sherikyGroup.destroyEach();
        score += 1;
       
}
function buttonisabel1(){
        puzzle1Group.destroyEach();
        score += 1;  
}
function buttonisabel2(){
        puzzle2Group.destroyEach();
        score += 1;  
}
function buttonnaomi(){
        hynaGroup.destroyEach();
        score += 1;
   
}
function buttonnaomi2(){
        tigerGroup.destroyEach();
        score += 1;
   
}
function buttonmattel1(){
        ashGroup.destroyEach();
        score += 1;
}
function buttonmattel2(){
        carlaGroup.destroyEach();
}
function buttonmattel3(){
        victorGroup.destroyEach();
}

function reset(){
        gameState = PLAY;
        gameOver.visible = false;
        restart.visible = false;
        
        obstaclesGroup.destroyEach();
        score = 0;
      
      }

// function spawnClouds() {
//   //write code here to spawn the clouds
//   if (frameCount % 60 === 0) {
//     var cloud = createSprite(600,120,40,10);
//     cloud.y = Math.round(random(80,120));
//     cloud.addImage(cloudImage);
//     cloud.scale = 0.5;
//     cloud.velocityX = -3;
    
//      //assign lifetime to the variable
//     cloud.lifetime = 200;
    
//     //adjust the depth
//     cloud.depth = trex.depth;
//     trex.depth = trex.depth + 1;
    
//     //add each cloud to the group
//     cloudsGroup.add(cloud);
//   }
  
// }





//     //assign scale and lifetime to the obstacle           
//     obstacle.scale = 0.5;
//     obstacle.lifetime = 300;
//     //add each obstacle to the group
//     obstaclesGroup.add(obstacle);
//   }
// }

