"use strict";

const cell = (x, y) => {
  this.x = x
  this.y = y
  this.state = 1 // 0 - dead, 1 - alive
}

const Grille = (dimX, dimY) => {
  this.dimX = dimX;
  this.dimY = dimY;
  this.cells = new Map();

  function addCell(x, y) {
    if (this.cells[x]) {
      this.cells[x] = new Map();
    }
    this.cells[x][y] = new cell(x, y)
  }

  function nbrAliveVoisin(cell) {
    var nbr = 0
    for (var i = (cell.x - 1); i <= (cell.x + 1); i++) {
      for (var j = (cell.y - 1); j <= (cell.y + 1); j++) {
        if ((i >= 0) && (j >= 0) && (i < dimX) && (j < dimY)) {
          if (this.cells[x] && this.cells[x][y] && (this.cells[x][y].state === 1)) {
            nbr++
          }
        }
      }
    }
    return nbr
  }

  return this
}

module.exports = { Grille };
