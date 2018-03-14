"use strict";

let { Grille } = require("./Grille");

let args = process.argv.slice(2);

function main(args) {
    let n1 = Number(args[0]);
    let n2 = Number(args[1]);

    var grille = Grille(n1, n2)

    var nbcells = Math.floor(Math.random() * Math.floor(n1 * n2 / 2))
    for (var i = 0; i < nbcells; i++) {
        grille.addCell(Math.floor(Math.random() * Math.floor(n1)), Math.floor(Math.random() * Math.floor(n2)))
    }

    console.log(grille.cells)
}

main(args);