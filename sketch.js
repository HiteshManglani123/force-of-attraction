
let pauseButton;
let pauseGame;
let attractors = {};
let particles = [];
let blasters = {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  initSketch()
  
  initButtons()
}

function resetObjects() {
  attractors = {}
  particles = []
  blasters = {}
}

function initSketch() {
  resetObjects()
  
  const widthCenter = floor(windowWidth / 2);
  const heightCenter = floor(windowWidth / 2);
  
  let initialAttractor = new Attractor(widthCenter, heightCenter, 25, 20, createVector())
  
  attractors[`${widthCenter}-${heightCenter}`] = 
    initialAttractor
  
  generateParticles(particles)

}

function pauseGameHandler() {
  pauseGame = !pauseGame
  if (pauseGame) {
    noLoop();
  } else {
    loop()
  }
}

function mousePressed() {
  const position = getPosition(mouseX, mouseY)
  let attractor;
  
  switch(position) {
    case 'topLeft':
      attractor = new Attractor(mouseX, mouseY, 25, 20, createVector(1, 1))
      break;
      case 'bottomLeft':
      attractor = new Attractor(mouseX, mouseY, 25, 20, createVector(1, -1))
      break;
      case 'topRight':
      attractor = new Attractor(mouseX, mouseY, 25, 20, createVector(-1, 1))
      break;
      case 'bottomRight':
      attractor = new Attractor(mouseX, mouseY, 25, 20, createVector(-1, -1))
      break;
      default:
      return;
  }
  attractors[`${attractor.pos.x}-${attractor.pos.y}`] = 
    attractor
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(4);
  
  textSize(20)
  text('Force of attraction', windowWidth / 2 - 50, 50)
  
  resetBlasters(blasters)
  
  updateAttractors(attractors);
  
  updateParticles(particles, attractors, blasters)

  updateBlasters(blasters)
}

function createBlaster(x, y) {
  const blaster = new Blaster(x, y, 50, 50)
  blasters[`${x}-${y}`] = blaster
}

