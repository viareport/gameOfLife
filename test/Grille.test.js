let {Grille}  = require("../src/Grille");

describe("Grille", () => {
    it("doit avoir le nombre de lignes et de colonnes passés en paramètre", () => {
       // GIVEN
       const nbLignes = 4;
       const nbColonnes = 4;

       // WHEN
        const grille = new Grille(nbLignes, nbColonnes);

       // THEN
        expect(grille.getCellule(4,4)).toBeNull();
        expect(grille.getCellule(3,3)).not.toBeNull();

    });
    it("doit afficher la grille", () => {
        // GIVEN
        const nbLignes = 4;
        const nbColonnes = 4;

        // WHEN
        const grille = new Grille(nbLignes, nbColonnes);

        // THEN
        expect(grille.afficher());
    });
});