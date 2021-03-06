var bimg,bg;
var gamestate="wait";
var start,startimg;
var working,workingimg;
var gnameimg,gname;
var controlimg,control;
var play;
var ground,img;
var invig,player,playerimg;
var codenum;
var code,codeimg;
var story,storyimg;
var code1,code1img;
var forest,forestimg;
var codebg,codebgimg;
var startsound;
var enemy,enemyanimation;
var enemygroup;
var enemy2animation,enemy2;
var rock,rockimg;
var enemy2group;
var rockgroup;
var tree,treeimg,treegroup;
var score=0;
var scoring,scoreimg;
var platform;
var moneycount;
var secretcode,secretcodebg;
var gameover,gameoverimg;
var missionfailed,missionfailedimg;
var wasted,wastedimg;
var entercode,entercodeimg,submit,submitimg;
var codevalue;
var missionpassed,missionpassedimg,win,winimg;
var inpval;
function preload(){

bimg=loadImage("imgs/b.png")
startimg=loadImage("imgs/START.png");
gnameimg=loadImage("imgs/GAME_NAME1.png");
storyimg=loadImage("imgs/STROY.png");
workingimg=loadImage("imgs/WORKING.png");
controlimg=loadImage("imgs/controls.png");
playimg=loadImage("imgs/play.png");
img=loadImage("imgs/bg1.jpg");
playerimg=loadAnimation("imgs/m1.png","imgs/m2.png","imgs/m3.png","imgs/m4.png","imgs/m5.png","imgs/m6.png",)
codeimg=loadImage("imgs/CODE.png");
code1img=loadImage("imgs/CODE1.png");
forestimg=loadImage("imgs/bg1.jpg");
startsound=loadSound("sounds/start.mp3");
enemyanimation=loadAnimation("imgs/p1.png","imgs/p2.png","imgs/p3.png","imgs/p4.png","imgs/p5.png","imgs/p6.png","imgs/p7.png","imgs/p8.png","imgs/p9.png")
enemy2animation=loadAnimation("imgs/enem1.png","imgs/enem2.png","imgs/enem3.png","imgs/enem4.png");
rockimg=loadImage("imgs/rock.png");
treeimg=loadImage("imgs/fallentree.png");
jumping=loadAnimation("imgs/m1.png");
treasureimg=loadImage("imgs/treasure.png");
scoreimg=loadImage("imgs/score.png");
moneyimg=loadImage("imgs/money.png");
secretcodebg=loadImage("imgs/Secret-Code.jpg");
gameoverimg=loadImage("imgs/gameover.jpg");
missionfailedimg=loadImage("imgs/mission failed.png");
wastedimg=loadImage("imgs/wasted.png");
highscoreimg=loadImage("imgs/highestscore.png");
entercodeimg=loadImage("imgs/secretcode.png");
submitimg=loadImage("imgs/submit.png");
winimg=loadImage("imgs/you win.jpg");
missionpassedimg=loadImage("imgs/mission passed.png");

};
function setup(){
 createCanvas(windowWidth,windowHeight);
 

 bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
 bg.addImage(bimg);
 bg.scale=0.5;

 start=createSprite(windowWidth/2,500);
 start.addImage(startimg);
 start.scale=0.4;

gname=createSprite(windowWidth/2,windowHeight/2+50);
gname.addImage(gnameimg);
gname.scale=0.6;


story=createSprite(windowWidth/2,windowHeight/2+50,windowWidth,windowHeight);
story.addImage(storyimg);
story.scale=0.67;

control=createSprite(windowWidth/2,windowHeight/2+50,windowWidth,windowHeight);
control.addImage(controlimg);
control.scale=0.67;

code=createSprite(1000,540,30,10);
code.addImage(codeimg);
code.scale=1;


working=createSprite(800,500);
working.addImage(workingimg);
working.scale=0.3;



ground=createSprite(width/2,height*2,width,height);
ground.addImage(img);
ground.x=ground.width/2;




score=0;
moneycount=0;
enemygroup=new Group();
enemy2group=new Group();
rockgroup=new Group();
treegroup=new Group();
treasuregroup=new Group();


codenum=Math.floor((Math.random()*10000)+1);



forest=createSprite(600,300);
forest.addImage(forestimg);
forest.scale=1.5;

player=createSprite(100,500,10,10);
player.addAnimation("running",playerimg);
player.addAnimation("jump",jumping);
player.scale=0.1;

invig=createSprite(400,560,1000,15);


scoring=createSprite(600,100);
scoring.addImage(scoreimg);
scoring.scale=0.2;
money=createSprite(900,100);
money.addImage(moneyimg);
money.scale=0.2;

secretcode=createSprite(600,200);
secretcode.addImage(secretcodebg);
secretcode.scale=1.5;
play=createSprite(1100,400);
play.addImage(playimg);
play.scale=0.5;
gameover=createSprite(600,150);
gameover.addImage(gameoverimg);
gameover.scale=2;

missionfailed=createSprite(windowWidth/2,windowHeight/2+100);
missionfailed.addImage(missionfailedimg);
missionfailed.scale=0.5;

wasted=createSprite(windowWidth/2,windowHeight/2+200);
wasted.addImage(wastedimg);
wasted.scale=0.5;



enetercode=createSprite(windowWidth/2,windowHeight/2);
enetercode.addImage(entercodeimg);
enetercode.scale=0.5;

submit=createSprite(windowWidth/2,windowHeight/2+100);
submit.addImage(submitimg);
submit.scale=0.3;


input = createInput("Enter The Code");
//inpval=input.value();

win=createSprite(500,100);
win.addImage(winimg);
win.scale=1;
missionpassed=createSprite(500,600);
missionpassed.addImage(missionpassedimg);
missionpassed.scale=0.5;
}
function draw(){
  
 // console.log(score);
 
  if(gamestate==="wait"){
    background("white");
startsound.play();
missionpassed.visible=false;
win.visible=false;
missionfailed.visible=false;
submit.visible=false;
wasted.visible=false;
enetercode.visible=false;
    forest.visible=false;
    control.visible=false;
    gameover.visible=false;
    scoring.visible=false;
    money.visible=false;
    story.visible=false;
    player.visible=false;
    bg.visible=true;
    working.visible=false;
    code.visible=false;
    play.visible=false;
    ground.visible=false;
    invig.visible=false;
    secretcode.visible=false;
    
    if(mousePressedOver(start)){
    gamestate="story";
     } 
    
   
    

  } 
  if(gamestate==="story"){
    story.visible=true;
    gname.visible=false;
    start.visible=false;
    working.visible=true;
    bg.visible=false;
    if(mousePressedOver(working)){
     gamestate="controls";
      } 
  }
  if(gamestate==="controls"){
    story.visible=false;
control.visible=true;
working.visible=false;
code.visible=true;

if(mousePressedOver(code)){
  gamestate="code";
   } 
  }
  if(gamestate==="code"){
   background("black");
   fill("green");
   textSize(100);
   
secretcode.visible=true;
   
  
   control.visible=false;
    code.visible=false;
    play.visible=true;
   
    if(mousePressedOver(play)){
      gamestate="gamestart";
    }

    
  }
if(gamestate==="gamestart"){
  secretcode.visible=false;
  
  play.visible=false;
  forest.visible=true;
  player.visible=true;
  background("blue");

  spawnEnemy();
  spawnEnemy2();
  spawnRock();
  spawnfallentree();
  spawntreasure();
  money.visible=true;
  scoring.visible=true;
  
  
  score++;  
  
  
  player.collide(invig);
  invig.velocityX=-3;
     if(invig.x<0){
 invig.x=400
  }
  forest.velocityX=-5;
  if(forest.x<300){
    forest.x=600
     }
     if(keyDown("m") ) {
      player.x =player.x+1 ;
     
    } 
    if(keyDown("b") ) {
      player.x =player.x-1 ;
     
    } 


     if(keyDown("space") && player.y >= 409) {
      player.velocityY = -12;
      player.changeAnimation("jump",jumping);
    }
    
    player.velocityY =player.velocityY + 0.8
  
    for(var i=0;i<treasuregroup.length;i++){
      if(treasuregroup.get(i).isTouching(player)){
          treasuregroup.get(i).destroy();
      moneycount=moneycount+100
      }
  }
  if(player.isTouching(enemy2group)){
    
    gamestate="end";
  }
  if(player.isTouching(enemygroup)){
   
    gamestate="end";
  }
  if(player.isTouching(rockgroup)){
 
    gamestate="end";
  }
  if(player.isTouching(treegroup)){
   
    gamestate="end";
  }
  if(score===100){
    gamestate="entercode"
  }
  
}
if(gamestate==="end"){
 missionfailed.visible=true;
 
 wasted.visible=true;
  scoring.visible=false;
  background("blue");
  player.visible=false;
  forest.visible=false;
  enemygroup.destroyEach();
  enemy2group.destroyEach();
  treegroup.destroyEach();
  rockgroup.destroyEach();
  treasuregroup.destroyEach();
  money.visible=false;
  text("YOU LOOSE! PERSON WAS CAUGHT BY TRIBALS",200,400);
  gameover.visible=true;
  

 
}
if(gamestate==="entercode"){
  enetercode.visible=true;
 submit.visible=true;
  scoring.visible=false;
  player.visible=false;
  forest.visible=false;
  money.visible=false;
  input.position(550,320);
  background("blue");
  enemygroup.destroyEach();
  enemy2group.destroyEach();
  treegroup.destroyEach();
  rockgroup.destroyEach();
  treasuregroup.destroyEach();
  //codevalue=input.value();
if(mousePressedOver(submit)){
 // if(codevalue===codenum){
  //  gamestate="win";
 // }
 inpval=input.value();            
text("THE CODE ENTERED BY YOU IS "+inpval,400,100);
}
  
}
if(gamestate==="win"){
  background("green");
}
  
drawSprites();
if(gamestate==="gamestart"){
fill("red");
textSize(30); 
text(":"+score,660,105);}
if(gamestate==="gamestart"){
  fill("red");
  textSize(30); 
  text("$"+moneycount,960,115);}
  if(gamestate==="code"){
  textSize(50);
    fill("red");
    text("CODE:"+codenum,400,480); 
  }
  if(gamestate==="end"){
    fill("red");
    textSize(20);
    text("PRESS CTRL+R TO PLAY AGAIN",20,220);
  }
  if(gamestate==="gamestart"){
    fill("red");
    textSize(20);
    text("SCORE 1000 TO PASS THIS STAGE",20,220);
  }
  if(gamestate==="entercode"){
   push();
   textSize(20);
   fill("RED");
    text("SUBMIT",580,410);
    pop();
  }
  if(gamestate==="entercode"){
    push();
    fill("green");
    textSize(20);
    text("MULTIPLY THE CODE WITH 2 AND INSERT THE CORRECT CODE",600,500);
    pop();
  }

  
   
  
}


function spawnEnemy() {
 
  if (frameCount % 250 === 0) {
    enemy = createSprite(600,520,40,10);
    enemy.addAnimation("running",enemyanimation);
    enemy.x = Math.round(random(900,1000))
    enemy.scale = 0.1;
    enemy.velocityX = -4;
    enemy.collide(invig);
    enemy.lifetime=300;
   enemygroup.add(enemy);
    }
}
function spawnEnemy2() {
 
  if (frameCount % 350 === 0) {
    enemy2 = createSprite(500,520,40,10);
    enemy2.addAnimation("running",enemy2animation);
    enemy2.x = Math.round(random(900,1000))
    enemy2.scale = 0.3;
    enemy2.velocityX = -4;
    enemy2.collide(invig);
    enemy2.lifetime=300;
   enemy2group.add(enemy2);
    }
}
function spawnRock() {
 
  if (frameCount % 500 === 0) {
    rock = createSprite(500,530,40,10);
  rock .addImage(rockimg);
 rock .x = Math.round(random(800,900))
  rock  .scale = 0.1;
   rock .velocityX = -4;
   rock .collide(invig);
  rock  .lifetime=300;
   rockgroup.add(rock);
    }
}
function spawnfallentree() {
 
  if (frameCount % 900 === 0) {
    tree = createSprite(500,530,40,10);
  tree .addImage(treeimg);
 tree .x = Math.round(random(1100,1200))
  tree  .scale = 0.2;
   tree .velocityX = -4;
   tree .collide(invig);
 tree  .lifetime=300;
   treegroup.add(tree);
    }
}
function spawntreasure() {
 
  if (frameCount % 100 === 0) {
    treasure = createSprite(500,530,40,10);
  treasure .addImage(treasureimg);
 treasure.y = Math.round(random(400,600));
  treasure.scale = 0.2;
   treasure.velocityX = -4;
   
 treasure .lifetime=300;
   treasuregroup.add(treasure);
    }
}

 
