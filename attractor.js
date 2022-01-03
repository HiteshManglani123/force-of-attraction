function Attractor(x, y, weight, r, velVector) {
  this.pos = createVector(x, y)
  this.weight = weight
  this.vel = velVector;
  this.acc = createVector();
  this.r = r
  
  this.update = function(attractors) {
    let prevPos = this.pos
    let key = `${prevPos.x}-${prevPos.y}`;  
    let attractor = attractors[key]
    delete attractors[key];
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    let newKey = `${this.pos.x}-${this.pos.y}`
    let hit = false;
    for (let i = this.pos.x; i < this.pos.x + 20; i++) {
      for (let j = this.pos.y; j < this.pos.y + 20; j++) {
        let currentKey =`${i}-${j}`
        if (currentKey in attractors) {
          createBlaster(this.pos.x, this.pos.y)
          delete attractors[currentKey]
          delete attractors[newKey]
          hit = true
        }
      }
    }
    if (!hit) {
      attractors[newKey] = attractor;
    }
  }
  
   this.show = function() {
      stroke(0, 255, 0)
      strokeWeight(3)
      ellipse(this.pos.x, this.pos.y, r)
  }
}