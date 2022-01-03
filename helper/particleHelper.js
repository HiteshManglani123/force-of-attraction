function generateParticles(particles) {
  for (let i = 0; i < windowWidth; i += 30) {
    for (let j = 100; j < windowHeight; j+= 30) {
          particles.push(new Particle(i, j, 5, 3));
    }
  }
}

function updateParticles(particles, attractors, blasters) {
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
  }