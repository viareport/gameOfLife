"use strict";

let {Grille, CELL} =  require("./Grille");

let args = process.argv.slice(2);

function main(args) {
    let n1 = Number(args[0]) || 80;
    let n2 = Number(args[1]) || 80;
    const grille = new Grille(n1, n2);
    for (let x = 0 ; x < grille.cells.length ; x++) {
        const row = grille.cells[x];
        for (let y = 0 ; y < row.length ; y++) {
            const random = Math.random();
            if (random > 0.8) {
                grille.setCell(x, y, CELL.ALIVE);
            }
        }
    }
    console.log(`Resultat ${grille.toString()}`)
}

main(args);