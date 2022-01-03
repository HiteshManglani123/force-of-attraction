function getPosition(x ,y) {
  if (x < 135 && y < 20) {
    return 'error'
  }
  if (x >= 0 && x < windowWidth / 2 && y >= 0 && y < windowHeight / 2) {
    return 'topLeft'
  }
  if (x >= 0 && x < windowWidth / 2 && y >= windowHeight / 2 && y <= windowHeight ) {
    return 'bottomLeft'
  }
    if (x >= windowWidth / 2 && x < windowWidth && y >= 0 && y < windowHeight / 2) {
    return 'topRight'
  }
    if (x >= windowWidth / 2 && x < windowWidth && y >= windowHeight / 2 && y < windowHeight) {
    return 'bottomRight'
  }
  return 'error'
}

function initButtons() {
  pauseButton = createButton('PAUSE');
  pauseButton.position(0, 0);
  pauseButton.mousePressed(pauseGameHandler);
  
  resetButton = createButton('RESET');
  resetButton.position(75, 0);
  resetButton.mousePressed(initSketch);
}

function generateParticles(particles) {
  for (let i = 0; i < windowWidth; i += 30) {
    for (let j = 100; j < windowHeight; j+= 30) {
          particles.push(new Particle(i, j, 5, 3));
    }
  }
}

function getForce(particle, attractor, type) {
  let force = p5.Vector.sub(attractor.pos, particle.pos);
    let d = force.magSq();
    d = constrain(d, 5, 25)
    let G = 0.005;
    let strength = G * (attractor.weight * particle.weight) / d;
  if (type === 'repulse') {
    strength = strength * -1
  }
    force.setMag(strength);
   return force;
}

function outOfBounds(x, y) {
  
    if (x > windowWidth || y > windowHeight || x < 0 || y < 0) {
      return true
    } else {
      return false
    }
}
