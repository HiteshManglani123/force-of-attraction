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
    // line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
    ellipse(this.pos.x, this.pos.y, r)
    
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  this.attracted = function(target) {
    let force = p5.Vector.sub(target.pos, this.pos);
    let d = force.magSq();
    d = constrain(d, 5, 25)
    let G = 0.005;
    let strength = G * (target.weight * this.weight) / d;
    force.setMag(strength);
    this.acc.add(force);
  }
}