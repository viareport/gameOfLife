"use strict";

const Grille = (dimX, dimY) => {
    this.dimX = dimX;
    this.dimY = dimY;
    this.cells = initCells(dimX, dimY);

    function initCells(dimX, dimY) {
      return new Map();
    }

    function alive() {
      return this.cells.size;
    }

    function dead() {
      return this.cells.size;
    }

}

module.exports = {Grille};
