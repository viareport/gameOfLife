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
     expect(grille.cells.alive.length).toBe(0);
   })
   it("Par défaut une grille n'a aucune cellule morte", () => {
     const dimX = 3, dimY = 4;
     var grille = new Grille(dimX, dimY);
     expect(grille.cells.dead.length).toBe(0);
   })
    it("Par défaut une grille a toutes ces cellules vides", () => {
        const dimX = 3, dimY = 4;
        var grille = new Grille(dimX, dimY);
        expect(grille.cells.empty.length).toBe(dimX * dimY);
    })
   // it("On peut disposer des cellules vivantes dans la grille", () => {
   //   const dimX = 3, dimY = 4;
   //   const alive = new Map();
   //   alive.set()
   //   var grille = new Grille(dimX, dimY, alive);
   //   expect(grille.cells.length.toBe(dimX * dimY);
   // })
   it("on ne sait pas tester puisque l'on a créer la grille en aléatoire", () => {
    const dimX = 3, dimY = 4;
    var grille = Grille(dimX, dimY);
    expect(grille.cells.size).toBe(dimX * dimY);
  })
});
