function Attractor(x, y, weight, r, velVector) {
  this.pos = createVector(x, y)
  this.weight = weight
  this.vel = velVector;
  this.acc = createVector();
  this.r = r
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
   this.show = function() {
      stroke(0, 255, 0)
      strokeWeight(3)
      ellipse(this.pos.x, this.pos.y, r)
  }
}