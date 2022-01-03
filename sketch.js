let incrementalAngle = 0.0;


let attractors = [];
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  attractors.push(new Attractor(windowWidth / 2, windowHeight / 2, 10, 20, createVector()))
  
  for (let i = 0; i < windowWidth; i += 20) {
    for (let j = 100; j < windowHeight; j+= 20) {
          particles.push(new Particle(i, j, 5, 3));
    }
  }
  
  // for (let i = 0; i < 10; i++) {
  //   particles.push(new Particle(random(width), random(height), 5, 3, i + 1));
  // }
  
  
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
  attractors.push(attractor)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(4);

  for (let i = 0; i < attractors.length; i++) {
    attractors[i].show()
    attractors[i].update()
  }

  for (let i = 0; i < particles.length; i++) {
    particle = particles[i];
    for (let j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j]);
    }
    particle.update();
    particle.show();
  }

}

