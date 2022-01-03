
// using index as id
let attractors = {};
let particles = [];
let blasters = {}
// let attractorPositions = {}
let id = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  const widthCenter = floor(windowWidth / 2);
  const heightCenter = floor(windowWidth / 2);
  
  let initialAttractor = new Attractor(widthCenter, heightCenter, 10, 20, createVector())
  
  attractors[`${widthCenter}-${heightCenter}`] = 
    initialAttractor
  
  for (let i = 0; i < windowWidth; i += 40) {
    for (let j = 100; j < windowHeight; j+= 40) {
          particles.push(new Particle(i, j, 5, 3));
    }
  }

}

function mousePressed() {
  const position = getPosition(mouseX, mouseY)
  let attractor;
  
  switch(position) {
    case 'topLeft':
      attractor = new Attractor(mouseX, mouseY, 10, 20, createVector(1, 1))
      break;
      case 'bottomLeft':
      attractor = new Attractor(mouseX, mouseY, 10, 20, createVector(1, -1))
      break;
      case 'topRight':
      attractor = new Attractor(mouseX, mouseY, 10, 20, createVector(-1, 1))
      break;
      case 'bottomRight':
      attractor = new Attractor(mouseX, mouseY, 10, 20, createVector(-1, -1))
      break;
      default:
      return;
  }
  attractors[`${attractor.pos.x}-${attractor.pos.y}`] = 
    attractor
  // attractors[id] = attractor
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
  
  let currentTime = millis()
  
  for (let key in blasters) {
    if (currentTime - blasters[key].life > 1000) {
      delete blasters[key]
    }
  }
  
  for (let key in attractors) {
    attractors[key].show()
    console.log(attractors[key]);
    attractors[key].update(attractors)
  }

  for (let i = 0; i < particles.length; i++) {
    particle = particles[i];
    for (let j in attractors) {
      particle.attracted(attractors[j]);
    }
    
    for (let key in blasters) {
      particle.blast(blasters[key])
    }
    particle.update();
    particle.show();
  }
  
  for (let key in blasters) {
    blasters[key].show()
  }

}

function createBlaster(x, y) {
  const blaster = new Blaster(x, y, 50, 50)
  blasters[`${x}-${y}`] = blaster
}

