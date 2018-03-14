let {Grille} = require("../src/Grille");

describe("Grille", () => {
   it("un grille possède autant de cellules que ses dimensions", () => {
     const dimX = 3, dimY = 4;
     var grille = new Grille(dimX, dimY);
     expect(grille.cells.size).toBe(dimX * dimY);
   })
   it("Par défaut, une grille n'a aucune cellule vivante", () => {
     const dimX = 3, dimY = 4;
     var grille = new Grille(dimX, dimY);
     expect(grille.alive()).toBe(0);
   })
   it("Par défaut une grille n'a aucune cellule morte", () => {
     const dimX = 3, dimY = 4;
     var grille = new Grille(dimX, dimY);
     expect(grille.dead()).toBe(dimX * dimY);
   })
   it("On peut disposer des cellules vivantes dans la grille", () => {
     const dimX = 3, dimY = 4;
     const alive = [
       {x: 1, y: 1},
       {x: 1, y: 2},
       {x: 2, y: 1}
     ];
     var grille = new Grille(dimX, dimY, alive);
     expect(grille.alive()).toBe(3);
   })
   it("déterminer pour n’importe quelle cellule de la grille son nombre de voisins vivants", () => {
     const dimX = 3, dimY = 4;
     const alive = [
       {x: 1, y: 1},
       {x: 1, y: 2},
       {x: 2, y: 1}
     ];
     var grille = new Grille(dimX, dimY, alive);
     expect(grille.celluleVivantesAutour({ x: 1, y: 1 })).toBe(2);
  })
});
