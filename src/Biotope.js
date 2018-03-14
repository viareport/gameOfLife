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

  aliveNb( cellX, cellY ) {
    var nb = 0;

    for ( var x = cellX - 1; x <= cellX + 1; ++x )
    {
      if ( x < 0 || x >= this.matrice.length ) {
        continue;
      }
      for ( var y = cellY -1; y <= cellY + 1; ++y )
      {
        if ( ( x === cellX && y === cellY ) || y < 0 || y >= this.matrice[ 0 ].length ) {
          continue;
        }

        if ( this.matrice[ x ][ y ] === 1 ) {
          ++nb;
        }
      }
    }

    return nb;
  }

  updateCellState ( x, y )
  {
    var nb = this.aliveNb( x, y );
    //console.log( nb )
    var currentState = this.matrice[ x ][ y ];

    if ( currentState ) {
      // still alive
      if ( nb >= 2 && nb <= 3 ) {
        return 1;
      }
      // dead
      else {
        return 0;
      }
    }
    else {
      return nb === 3 ? 1 : 0;
    }
  }

  checkAliveCells () {
    for ( var x = 0; x < this.matrice.length; ++x )
    {
      for ( var y = 0; y < this.matrice[ x ].length; ++y )
      {
        this.matrice[ x ][ y ] = this.updateCellState( x, y );
      }
    }
  }
}

module.exports = {Biotope};
