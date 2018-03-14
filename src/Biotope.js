"use strict";

const status = {
  empty: 0,
  alive: 1,
  dead: 2,
  zombie: 3
}

class Biotope {

  constructor(rows, cols) {
    this.matrice = Array(rows);
    for (let x = 0; x < rows; x++) {
      this.matrice[x] = [];
      for (let y = 0; y < cols; ++y) {
        this.matrice[x].push(Math.floor(Math.random() * Math.floor(4)));
      }
    }
  }

  toString() {
    return this.matrice.map((row) => row.map((cell) => {
      switch (cell) {
        case status.alive:
          return "A"
        case status.dead:
          return "d"
        case status.zombie:
          return "Z"
        default:
          return "-"
      }
    }).join("\t")).join("\n")
  }

  aliveNb(cellX, cellY) {
    var nb = 0;

    for (var x = cellX - 1; x <= cellX + 1; ++x) {
      if (x < 0 || x >= this.matrice.length) {
        continue;
      }
      for (var y = cellY - 1; y <= cellY + 1; ++y) {
        if ((x === cellX && y === cellY) || y < 0 || y >= this.matrice[0].length) {
          continue;
        }
        if ((this.matrice[x][y] === status.alive) || (this.matrice[x][y] === status.zombie)) {
          ++nb;
        }
      }
    }

    return nb;
  }
  getStatusZombie(cellX, cellY) {
    var nbAlive = 0;
    var nbZombie = 0;
    for (var x = cellX - 1; x <= cellX + 1; ++x) {
      if (x < 0 || x >= this.matrice.length) {
        continue;
      }
      for (var y = cellY - 1; y <= cellY + 1; ++y) {
        if ((x === cellX && y === cellY) || y < 0 || y >= this.matrice[0].length) {
          continue;
        }
        if (this.matrice[x][y] === status.alive) {
          ++nbAlive;
        }
        else if (this.matrice[x][y] === status.zombie) {
          ++nbZombie;
        }
      }
    }

    return nbAlive > nbZombie ? status.alive : status.zombie
  }

  updateCellState(x, y) {
    var nb = this.aliveNb(x, y);
    //console.log( nb )
    var currentState = this.matrice[x][y];

    switch (currentState) {
      case status.alive:
      case status.zombie:
        return (nb >= 2 && nb <= 3) ? currentState : status.dead
      case status.empty:
        return (nb !== 3) ? currentState : status.alive
      case status.dead:
        return (nb !== 3) ? currentState : this.getStatusZombie(x, y)
      default:
        return currentState
    }
  }

  checkAliveCells() {
    this.matrice = this.matrice.map((row, x) => row.map((cell, y) => this.updateCellState(x, y)))
  }
}

module.exports = { Biotope };
