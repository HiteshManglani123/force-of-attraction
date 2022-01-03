function getPosition(x ,y) {
  if (x >= 0 && x < windowWidth / 2 && y >= 0 && y < windowHeight / 2) {
    return 'topLeft'
  }
  if (x >= 0 && x < windowWidth / 2 && y >= windowHeight / 2 && y <= windowHeight ) {
    return 'bottomLeft'
  }
    if (x >= windowWidth / 2 && x < windowWidth && y >= 0 && y < windowHeight / 2) {
    return 'topRight'
  }
    if (x >= windowWidth / 2 && x < windowWidth && y >= windowHeight / 2 && y < windowHeight) {
    return 'bottomRight'
  }
  return 'error'
}