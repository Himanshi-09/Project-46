const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var anna,anna1;
var backimg;
var key, key1;
var monsters1;
var monster;
var monster2,monsters3;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rec9,rect10;
var rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20;
var rect21,rect22,rect23,rect24,rect25,rect26,rect27,rect28,rect29,rect30,rect31;
var PLAY = 1;
var END = 0;
var NEXT = 2;
var gameState = PLAY;
var monster1Group;
var monster2Group;
var monster3Group;
var monster4Group;
var keyGroup;
var reset;
var gameover,gameOver;
var closedDoor,door;
var openDoor,open;
function preload(){
backimg = loadImage("../images/aren.jpg");
anna1 = loadImage("../images/anna5.png");
key1 = loadImage("../images/silverkey1.png");
monsters2 = loadImage("../images/monster2.png");
monsters3 = loadImage("../images/monster3.png");
monsters4 = loadImage("../images/monsters4.png");
monsters5 = loadImage("../images/monsters5.png");
gameover = loadImage("../images/gameOver.png");
closedDoor = loadImage("../images/Cclosed.png");
openeddoor = loadImage("../images/Oopen.png");

}
function setup(){
    var canvas = createCanvas(displayWidth,655);
    engine = Engine.create();
    world = engine.world;
    anna = createSprite (100,550,5,5);
    anna.addImage("Anna",anna1);
    anna.scale = .2;
    keyGroup = new Group ();
    key = createSprite(1300,90,20,20);
    key.addImage("keys",key1);
    key.scale = .2;
    keyGroup.add(key);
    
   // anna.debug = true;
    monster1Group = new Group ();
    monster2Group = new Group ();
    monster3Group = new Group ();
    monster4Group = new Group ();
    
    reset = createSprite(650,325,100,50);
    reset.visible = false;
    anna.setCollider("rectangle",0,0,70,450);
    rect1 = createSprite(190,600,100,10);
    rect1.shapeColor = "white";
    rect2 = createSprite(200,500,120,10);
    rect2.shapeColor = "white";
    rect3 = createSprite(255,445,10,100);
    rect3.shapeColor =  "white";
    rect4 = createSprite(365,550,10,100);
    rect4.shapeColor =  "white";
    rect5 = createSprite(300,600,140,10);
    rect5.shapeColor =  "white";
    rect5 = createSprite(475,390,450,10);
    rect5.shapeColor =  "white";
    rect6 = createSprite(410,500,100,10);
    rect6.shapeColor =  "white";
    rect7 = createSprite(460,550,10,110);
    rect7.shapeColor =  "white";
    rect8 = createSprite(560,550,10,110);
    rect8.shapeColor =  "white";
    rect9 = createSprite(515,600,100,10);
    rect9.shapeColor =  "white";
    rect10 = createSprite(350,340,10,100);
    rect10.shapeColor =  "white";
    rect11 = createSprite(450,340,10,100);
    rect11.shapeColor =  "white";
    rect12 = createSprite(515,600,100,10);
    rect12.shapeColor =  "white";
    rect13 = createSprite(515,600,100,10);
    rect13.shapeColor =  "white";
    rect14 = createSprite(145,270,10,450);
    rect14.shapeColor = "white";
    rect15 = createSprite(700,50,1100,10);
    rect15.shapeColor = "white";
    rect16 = createSprite(1245,375,10,450);
    rect16.shapeColor = "white";
    rect17 = createSprite(900,600,700,10);
    rect17.shapeColor = "white";
    rect18 = createSprite(700,390,200,10);
    rect18.shapeColor = "white";
    rect19 = createSprite(800,435,10,100);
    rect19.shapeColor = "white";
    rect20 = createSprite(770,490,250,10);
    rect20.shapeColor = "white";
    rect21 = createSprite(400,290,300,10);
    rect21.shapeColor = "white";
    rect22 = createSprite(1000,490,10,210);
    rect22.shapeColor = "white";
    rect23 = createSprite(1080,380,340,10);
    rect23.shapeColor = "white";
    rect24 = createSprite(1170,490,150,10);
    rect24.shapeColor = "white";
    rect25 = createSprite(1080,150,340,10);
    rect25.shapeColor = "white";
   // rect26 = createSprite(1070,10,10,110);
   // rect26.shapeColor = "white";
    rect27 = createSprite(250,100,10,100);
    rect27.shapeColor = "white";
    rect28 = createSprite(200,145,100,10);
    rect28.shapeColor = "white";
    rect29 = createSprite(400,145,400,10);
    rect29.shapeColor = "white";
    rect30 = createSprite(800,150,10,210);
    rect30.shapeColor = "white";
    rect31 = createSprite(900,260,500,10);
    rect31.shapeColor = "white";
    rect32 = createSprite(400,220,300,10);
    rect32.shapeColor = "white";
    gameOver = createSprite(700,320,100,20);
    gameOver.addImage("gameOver",gameover);
    gameOver.visible = false;
    door = createSprite(680,430,1300,100);
    door.addImage("Close",closedDoor);
    door.visible = false;
    door.scale = 2.5;

}




function draw(){
    background(backimg);
    Engine.update(engine);
    
    if(gameState===PLAY){
        move ();
        spawnMonster();
    if(monster1Group.isTouching(anna) ||monster2Group.isTouching(anna)||monster3Group.isTouching(anna) ||monster4Group.isTouching(anna)  ){
          gameState = END;
        }
        if(keyGroup.isTouching(anna)){
            gameState = NEXT;
            
            anna.x = 100;
            anna.y = 550;
            door.visible = true;
        }
    }
    else if ( gameState===END){
     anna.velocityX = 0;
     anna.velocityY = 0;
     monster1Group.setVelocityXEach(0);
     monster2Group.setVelocityXEach(0);
     monster3Group.setVelocityXEach(0);
     monster4Group.setVelocityXEach(0);
     //reset.visible = true;
     gameOver.visible = true;
    }
    else if (gameState === NEXT){
     destroyphase1();
    
    }


    anna.collide(rect1);
    anna.collide(rect2);
    anna.collide(rect3);
    anna.collide(rect4);
    anna.collide(rect5);
    anna.collide(rect6);
    anna.collide(rect7);
    anna.collide(rect8);
    anna.collide(rect9);
    anna.collide(rect10);
    anna.collide(rect11);
    anna.collide(rect12);
    anna.collide(rect13);
    anna.collide(rect14);
    anna.collide(rect15);
    anna.collide(rect16);
    anna.collide(rect17);
    anna.collide(rect18);
    anna.collide(rect19);
    anna.collide(rect20);
    anna.collide(rect21);
    anna.collide(rect22);
    anna.collide(rect23);
    anna.collide(rect24);
    anna.collide(rect25);
    //anna.collide(rect26);
    anna.collide(rect27);
    anna.collide(rect28);
    anna.collide(rect29);
    anna.collide(rect30);
    anna.collide(rect31);
    anna.collide(rect32);
    
    
    drawSprites();
    
}
function move(){
    if(keyDown(UP_ARROW)){
        anna.y = anna.y-2;
    }
    if(keyDown(DOWN_ARROW)){
        anna.y = anna.y+2;
    }
    if(keyDown(RIGHT_ARROW)){
        anna.x = anna.x+2;
    }
    if(keyDown(LEFT_ARROW)){
        anna.x = anna.x-2;
    }
}
function spawnMonster(){
    if(frameCount%220===0){
        //console.log(frameCount);
        var monster1 = createSprite(720,450,30,30);
        monster1.addImage("Monster1",monsters2);
        monster1.scale = .1;
        monster1.lifetime = 220;
        monster1.velocityX = -2;
        monster1Group.add(monster1);
       
    }
    if(frameCount%280===0){
        var monster2 = createSprite(600,550,30,30);
        monster2.addImage("Monster2",monsters3);
        monster2.scale = .1;
        monster2.lifetime = 190;
        monster2.velocityX = 2;
        monster2Group.add(monster2);
    }
    if(frameCount%320===0){
        var monster3 = createSprite(860,100,30,30);
        monster3.addImage("Monster3",monsters4);
        monster3.scale = .2;
        monster3.lifetime = 190;
        monster3.velocityX = 2;
        monster3Group.add(monster3);
    }
    if(frameCount%400===0){
        var monster4 = createSprite(1200,350,30,30);
        monster4.addImage("Monster4",monsters5);
        monster4.scale = .2;
        monster4.lifetime = 250;
        monster4.velocityX = -2;
        monster4Group.add(monster4);
    }

}
function destroyphase1(){
    monster1Group.destroyEach();
    monster2Group.destroyEach();
    monster3Group.destroyEach();
    monster4Group.destroyEach();
    rect1.destroy();
    rect2.destroy();
    rect3.destroy();
    rect4.destroy();
    rect5.destroy();
    rect6.destroy();
    rect7.destroy();
    rect8.destroy();
    rect9.destroy();
    rect10.destroy();
    rect11.destroy();
    rect12.destroy();
    rect13.destroy();
    rect14.destroy();
    rect15.destroy();
    rect16.destroy();
    rect17.destroy();
    rect18.destroy();
    rect19.destroy();
    rect20.destroy();
    rect21.destroy();
    rect22.destroy();
    rect23.destroy();
    rect24.destroy();
    rect25.destroy();
    //rect26.destroy();
    rect27.destroy();
    rect28.destroy();
    rect29.destroy();
    rect30.destroy();
    rect31.destroy();
    rect32.destroy();

}
