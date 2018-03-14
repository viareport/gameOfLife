"use strict";

function initCells(dimX, dimY) {
    const grille = Array(dimX);
    for (let x = 0 ; x < grille.length ; x++) {
        grille[x] = Array(dimY);

        for (let y = 0 ; y < grille[x].length ; y++) {
            grille[x][y] = CELL.EMPTY;
        }
    }
    return grille;
}

const CELL = {
    EMPTY: " ",
    DEAD: "x",
    ALIVE: "o"
};

class Grille {
    constructor(dimX, dimY) {
        this.dimX = dimX;
        this.dimY = dimY;
        this.cells = initCells(dimX, dimY);
    }

    getCell(x, y) {
       // if (x < 0 || x > this.cells.length || (this.cells[x]))
        return this.cells[x][y];
    }

    setCell(x, y, content) {
        this.cells[x][y] = content;
    }

    toString() {
        const grille = this.cells;
        let result = "";
        for (let x = 0 ; x < grille.length ; x++) {

            for (let y = 0 ; y < grille[x].length ; y++) {
                result += grille[x][y];
            }
            result += "\n";
        }
        return result;
    }
  
  nbrAliveVoisin(x, y) {
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
}

module.exports = {Grille, CELL};
