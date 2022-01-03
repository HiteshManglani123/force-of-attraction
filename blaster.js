function Blaster(x, y, weight, r) {
  this.pos = createVector(x, y)
  this.weight = weight
  this.vel = createVector;
  this.acc = createVector();
  this.r = r
  this.life = millis()
  
   this.show = function() {
      stroke(230,230,250)
      strokeWeight(3)
      this.updateR()
      ellipse(this.pos.x, this.pos.y, this.r)
  }
  
  this.updateR = function() {
    let currentTime = millis()
      if (currentTime - this.life < 250) {
        this.r = 10
      }
     else if (currentTime - this.life < 500) {
        this.r = 20
      }
     else if (currentTime - this.life < 750) {
        this.r = 40
      }
     else {
        this.r = 60
      }
  }
}