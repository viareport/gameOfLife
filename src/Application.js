"use strict";

let {add} =  require("./Add")

let args = process.argv.slice(2)

function main(args) {
    let n1 = Number(args[0]) || 10
    let n2 = Number(args[1]) || 10
    console.log(`Resultat ${add(n1, n2)}`)
}

main(args)

