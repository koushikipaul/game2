var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track_image,car_image1,car_image2,car_image3,car_image4;

var cars, car1, car2, car3, car4;
 function preload(){
  track_image = loadImage("images/track.jpg");
  car_image1 = loadImage("images/car1.png");
  car_image2 = loadImage("images/car2.png");
  car_image3 = loadImage("images/car3.png");
  car_image4 = loadImage("images/car4.png");

 }

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
}
