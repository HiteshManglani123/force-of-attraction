function Blaster(x, y, weight, r) {
  this.pos = createVector(x, y)
  this.weight = weight
  this.vel = createVector;
  this.acc = createVector();
  this.r = r
  this.life = millis()
  
  this.update = function(attractors) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
   this.show = function() {
      stroke(230,230,250)
      strokeWeight(3)
      ellipse(this.pos.x, this.pos.y, r)
  }
}