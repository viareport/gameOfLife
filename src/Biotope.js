"use strict";

class Biotope {

  constructor(r,c) {
    this.matrice = Array(r);
    for (let x = 0 ; x < r ; x++) {
      this.matrice[x] = Array(c);
    }
  }

  toString () {
      let result = "";
      for (let x = 0 ; x < this.matrice.length ; x++) {
          const row = this.matrice[x];
          for (let y = 0 ; y < row.length ; y++) {
              result += row[y] || " ";
          }
          result += "\n";
      }
      return result;
  }

}

module.exports = {Biotope};
