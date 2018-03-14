"use strict";


let {Biotope} =  require("./Biotope")

let args = process.argv.slice(2);

function main(args) {
    let rows = Number(args[0]) || 10;
    let columns = Number(args[1]) || 10;
    const biotope = new Biotope(rows, columns);

    setInterval( () => {
        console.log( "====== updating ======" );
        console.log(biotope.toString());
        console.log( "======================" );
        biotope.checkAliveCells();
    }, 1000 );
}

main(args);

