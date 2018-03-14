"use strict";

function initCells(dimX, dimY, alive) {
    const grille = new Map();
    for (let x = 0 ; x < dimX ; x++) {

        for (let y = 0 ; y < dimY ; y++) {
          var coordonnees = {x,y};
          var cellValue = alive.some(coor => coor.x === x && coor.y === y) ? CELL.ALIVE : CELL.DEAD;
            grille.set(coordonnees, cellValue);
        }
    }
    return grille;
}

const CELL = {
    DEAD: false,
    ALIVE: true
};

class Grille {
    constructor(dimX, dimY, alive = []) {
        this.dimX = dimX;
        this.dimY = dimY;
        this.cells = initCells(dimX, dimY, alive);
    }

    // getCell(x, y) {
    //    // if (x < 0 || x > this.cells.length || (this.cells[x]))
    //     return this.cells[x][y];
    // }

    alive() {
      var nb = 0;
      for (var cell of this.cells.values()) {
        nb += cell ? 1 : 0;
      }
      return nb;
    }

    dead() {
      var nb = 0;
      for (var cell of this.cells.values()) {
        nb += cell ? 0 : 1;
      }
      return nb;
    }

    celluleVivantesAutour({x,y}) {
      return Array.from(this.cells.keys())
      .filter(({dx, dy}) => (dx === x-1 || dx === x+1) && (dy === y-1 || dy === y+1) )
      .filter(({dx, dy}) => this.cells.get({x: dx, y: dy}) === true).length;
    }

    // setCell(x, y, content) {
    //     this.cells[x][y] = content;
    // }
    //
    // toString() {
    //     const grille = this.cells;
    //     let result = "";
    //     for (let x = 0 ; x < grille.length ; x++) {
    //
    //         for (let y = 0 ; y < grille[x].length ; y++) {
    //             result += grille[x][y];
    //         }
    //         result += "\n";
    //     }
    //     return result;
    // }


    // nbrAliveVoisin(x, y) {
    //   var nbr = 0
    //   for (var i = (cell.x - 1); i <= (cell.x + 1); i++) {
    //     for (var j = (cell.y - 1); j <= (cell.y + 1); j++) {
    //       if ((i >= 0) && (j >= 0) && (i < dimX) && (j < dimY)) {
    //         if (this.cells[x] && this.cells[x][y] && (this.cells[x][y].state === 1)) {
    //           nbr++
    //         }
    //       }
    //     }
    //   }
    //   return nbr
    // }

}

module.exports = {Grille, CELL};
