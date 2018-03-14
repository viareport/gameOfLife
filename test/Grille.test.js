let {Grille}  = require("../src/Grille");

describe("Grille", () => {
    it("doit avoir le nombre de lignes et de colonnes passés en paramètre", () => {
       // GIVEN
       const nbLignes = 4;
       const nbColonnes = 4;

       // WHEN
        const grille = new Grille(nbLignes, nbColonnes);

       // THEN
        expect(grille.getCellule(3,3)).not.toBeNull();
        expect(grille.getCellule(4,4)).toBeNull();

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


    it("cellulesVoisinesVivantes a 8 voisins vivants en 0,0", () => {
        // GIVEN
        const grille = new Grille(4, 4);
        grille.allAlive();

        // WHEN
        const nbVoisins = grille.cellulesVoisinesVivantes(0,0);

        // THEN
        expect(nbVoisins).toBe(8);
    });

    it("cellulesVoisinesVivantes a 8 voisins vivants en 0,3", () => {
        // GIVEN
        const grille = new Grille(4, 4);
        grille.allAlive();

        // WHEN
        const nbVoisins = grille.cellulesVoisinesVivantes(0,3);

        // THEN
        expect(nbVoisins).toBe(8);
    });

    it("cellulesVoisinesVivantes a 8 voisins vivants en 3,0", () => {
        // GIVEN
        const grille = new Grille(4, 4);
        grille.allAlive();

        // WHEN
        const nbVoisins = grille.cellulesVoisinesVivantes(3,0);

        // THEN
        expect(nbVoisins).toBe(8);
    });

    it("cellulesVoisinesVivantes a 8 voisins vivants en 3,3", () => {
        // GIVEN
        const grille = new Grille(4, 4);
        grille.allAlive();

        // WHEN
        const nbVoisins = grille.cellulesVoisinesVivantes(3,3);

        // THEN
        expect(nbVoisins).toBe(8);
    });

    describe("Une cellule sait déterminer son nombre de voisins vivants", () => {
      it("une cellule connait ses voisins vivants", () => {
        // GIVEN
        const nbLignes = 4;
        const nbColonnes = 4;

        // WHEN
        const grille = new Grille(nbLignes, nbColonnes);
          grille.allAlive();

        // THEN
         expect(grille.cellulesVoisinesVivantes(2, 2)).toBe(8);
      });
      // it("le nombre doit être inférieur ou égal à 3", () => {
      //   expect(cell.cellulesVoisinesVivantes()).toBeLessThanOrEqual(3).
      // });
      // it("le nombre doit être supérieur à 2", () => {
      //
      //   expect(cell.cellulesVoisinesVivantes()).toBeGreaterThan(2);
      // });

    });



});
