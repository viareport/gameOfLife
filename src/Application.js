"use strict";

let { add } = require("./Add");
let { Grille } = require("./Grille");

let args = process.argv.slice(2);

function main(args) {
    let n1 = Number(args[0]);
    let n2 = Number(args[1]);

    let grille = new Grille(n1, n2);

    console.log("Generation 1")
    grille.afficher()
    grille.generateNextState()
    console.log("\nGeneration 2")
    grille.afficher()
    grille.generateNextState()
    console.log("\nGeneration 3")
    grille.afficher()
}

main(args);