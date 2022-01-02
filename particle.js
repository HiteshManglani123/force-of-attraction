function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector()
  this.acc = createVector();
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.show = function() {
    stroke(255)
    strokeWeight(2)
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
    
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }
  
  this.attracted = function(target) {
    let force = p5.Vector.sub(target, this.pos);
    let d = force.mag();
    d = constrain(d, 5, 25)
    let G = 1;
    let strength = G / d;
    force.setMag(strength);
    this.acc.add(force);
  }
}