// Licence CC BY-NC-SA 4.0
// Attribution — You must give appropriate credit.
// Non Commercial — You may not use the material for commercial purposes.

import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js'

const bg = Grid1Background(document.getElementById('webgl-canvas'))

$(document).ready(function(){
  bg.grid.setColors([0xaaaaaa, 0x999999, 0xcccccc])
  bg.grid.light1.color.set(0xffaaaa)
  bg.grid.light1.intensity = 100
  bg.grid.light2.color.set(0x222277)
  bg.grid.light2.intensity = 200
})
