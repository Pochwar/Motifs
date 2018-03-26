/*
Original code made with Processing by Gautier Sire
Reworked with Processing.Js by Benoît Ripoche
*/

var ta = 50;//TAILLE DU MOTIF
var lineStroke = 0; // EPAISSEUR DES LIGNES //
var opacity; // OPACITE
var t = 0.5 ; // //  CONTOUR PAR DEFAUT DU MOTIF
var fr = rand(5, 7); // IPS
var cm;  // COULEUR MOTIF
var Taille = false; //
var Framerate = false; // interrupteur AUGMENTE LA CADENCE D'IPS
var violet = false; // bouton BACKGROUND VIOLET
var vert = false; // bouton BACKGROUND VERT
var jaune = false; // bouton BACKGROUND JAUNE
var contour = 0; // slider AUGMENTE LE COUTOUR DU MOTIF//

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 600);

  // Create the GUI
  var cp5 = createGui('Controls', 700, 50);

  // create lineStroke slider
  sliderRange(0.5, 50, 0.5);
  cp5.addGlobals('lineStroke');

  // create Taille checkbox
  cp5.addGlobals('Taille');

  // create contour slider
  sliderRange(0, 55, 1);
  cp5.addGlobals('contour');

  // create Framerate, violet, vert & jaune checkboxes
  cp5.addGlobals('Framerate', 'violet', 'vert', 'jaune');

  // Only call draw when then gui is changed
  // noLoop();
}

function draw() {
  frameRate(fr);
  background('#FFFFFF');

  if (Taille) {
    ta = rand(50, 100);
  } else {
    ta = 50;
  }

  if (Framerate) {
    frameRate(300);
  } else {
    frameRate(fr);
  }

  if (violet) {
    vert = false;
    jaune = false;
    background(rand(250, 0), 0, rand(0, 250), opacity);
    cm = rand(0, 10);
  }

  if (vert) {
    violet = false;
    jaune = false;
    background(0, rand(250, 0), rand(0, 250), opacity);
    cm = 100;
  }

  if (jaune) {
    background(255, 255, 0, opacity);
    cm = rand(0, 250);
  }

  for (var i=0; i<width+110; i+=50) {
    for (var j=0; j<height-100; j+=50) {
      motif(i, j, 50, (rand(0, 2)));
    }
  }
}

function motif(x, y, opacity, rm) {  //(rm = random motif)
  /*
  * MOTIF 1
  */

  // rectangles
  opacity = rand(0, 40);
  fill(0, 0, cm, opacity);
  stroke("#000000");
  strokeWeight(contour);
  rect(x, y, ta, ta);

  // lines
  if (rm == 0) {
    noFill();
    stroke("#FFFFFF");
    strokeWeight(lineStroke);
    line(x, y, ta+x, ta+y);
  }

  /*
  * MOTIF 2
  */

  // rectangles
  opacity = rand(0, 40);
  cm = 250;
  fill(cm, 0, 0, opacity);
  stroke("#000000");
  strokeWeight(contour);
  rect(x, y, x+ta, y+ta);
  fill("#000000");
  rect(0, 500, 600, 100 );

  // lines
  if (rm == 1) {
    noFill();
    stroke("#FFFFFF");
    strokeWeight(lineStroke);
    line(ta+x, y, x, ta+y);
  }
}

/****************
*     UTILS     *
*****************/
function rand(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}