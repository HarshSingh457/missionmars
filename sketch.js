var homebg,rocket,p1,p2,p3,p4;
var homebgimg,rocketimg,p1img,p2img,p3img,p4img;
x=-200;
y=200

var p1X=150;
var p1Y=10;
var p2X=218;
var p2Y=305;
var p3X=900;
var p3Y=305;
var p4X=900;
var p4Y=50;

function preload(){
homebgimg=loadImage("1bg.jpg");
p1img=loadImage("centerbody.png");
p2img=loadImage("leftbody.png");
p3img=loadImage("rightbody.png");
p4img=loadImage("topbody.png");
rocketimg=loadImage("rocketbody.png");



}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 
  
  p1=rect(p1X,p1Y,120,120);
  p2=rect(p2X,p2Y,120,120);
  p3=rect(p3X,p2Y,120,120);
  p4=rect(p4X,p4Y,120,120);
 
}



function draw(){
background(homebgimg);

image(p1img,p1X,p1Y,230,300 );
image(p2img,p2X,p2Y,100,350 );
image(p3img,p3X,p3Y,100,350 );
image(p4img,p4X,p4Y,100,350 );

}

function mouseDragged() {
	var diff = p1X - mouseX;
  x = x - diff;
  p1X = mouseX;

  var dif=p1Y- mouseY
  y = y - dif;
  p1Y = mouseY;

  var di = p2X - mouseX;
  x = x - di;
  p2X = mouseX;

  var di=p2Y- mouseY
  y = y - di;
  p2Y = mouseY;
 
  // var diff = p3X - mouseX;
  // x = x - diff;
  // p3X = mouseX;

  // var dif=p3Y- mouseY
  // y = y - dif;
  // p3Y = mouseY;

  // var diff = p4X - mouseX;
  // x = x - diff;
  // p4X = mouseX;

  // var dif=p4Y- mouseY
  // y = y - dif;
  // p4Y = mouseY;

}
