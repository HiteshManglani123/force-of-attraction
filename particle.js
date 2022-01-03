function Particle(x, y, weight, r) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  // this.vel = p5.Vector.random2D();
  this.vel = createVector(1, 0);
  this.acc = createVector();
  this.weight = weight
  this.r = r
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.show = function() {
    stroke(255)
    strokeWeight(2)
    ellipse(this.pos.x, this.pos.y, r)
    
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  this.attracted = function(target) {
    let force = getForce(this, target, 'attract')
    this.acc.add(force)
  }
  
  this.blast = function(target) {
    let force = getForce(this, target, 'repulse')
    this.acc.add(force)
  }
}