function resetBlasters(blasters) {
    let currentTime = millis()
    for (let key in blasters) {
    if (currentTime - blasters[key].life > 1000) {
      delete blasters[key]
    }
  }
}

function updateBlasters(blasters) {
  for (let key in blasters) {
    blasters[key].show()
  }

}