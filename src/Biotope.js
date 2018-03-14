"use strict";

class Biotope {

  constructor(rows,cols) {
    this.matrice = Array(rows);
    for (let x = 0 ; x < rows ; x++) {
      this.matrice[x] = [];
      for( let y = 0; y < cols; ++y ) {
        this.matrice[x].push( Math.random() * 10 > 7 ? 1 : 0 );
      }
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
