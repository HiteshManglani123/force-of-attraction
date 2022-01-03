function updateAttractors(attractors) {
  for (let key in attractors) {
    attractors[key].show()
    attractors[key].update(attractors)
  }
}