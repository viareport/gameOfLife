const cellStatus = {
  alive: 1,
  dead: 0
};


class Grille {

  constructor(nbLignes, nbColonnes) {
    this.nbLignes = nbLignes;
    this.nbColonnes = nbColonnes;
    this.grille = [];
    for (let i = 0; i < this.nbLignes; i++) {
      for (let j = 0; j < this.nbColonnes; j++) {
        if (!this.grille[i]) {
          this.grille[i] = [];
        }
        this.grille[i][j] = this.getRandomInt(2); // 0 - dead, 1 - alive
      }
    }
  }

  allAlive() {
      for (let i = 0; i < this.nbLignes; i++) {
          for (let j = 0; j < this.nbColonnes; j++) {
              this.grille[i][j] = 1;
          }
      }
  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  afficher() {
    let affichage = this.grille.map((row) => row.map((cell) => cell === cellStatus.alive ? 'A' : '-').join(" ")).join("\n")
    console.log(affichage);
  }

  getCellule(ligne, colonne) {
    if (!this.grille[ligne] || !this.grille[ligne][colonne]) {
      return null;
    }
    return this.grille[ligne][colonne];
  }

    cellulesVoisinesVivantes(ligne, colonne) {

        var nb = 0;

        const ligneAvant = ligne === 0 ? this.nbLignes - 1 : ligne - 1;
        const ligneApres = ligne === this.nbLignes - 1 ? 0 : ligne + 1;
        const colonneAvant = colonne === 0 ? this.nbColonnes - 1 : colonne - 1;
        const colonneApres = colonne === this.nbColonnes - 1 ? 0 : colonne + 1;

        nb += this.getCellule(ligneAvant, colonneAvant) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligneAvant, colonne) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligneAvant, colonneApres) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligne, colonneAvant) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligne, colonneApres) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligneApres, colonneAvant) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligneApres, colonne) === cellStatus.alive ? 1 : 0;
        nb += this.getCellule(ligneApres, colonneApres) === cellStatus.alive ? 1 : 0;

        return nb;
    }

    generateNextState() {
        this.grille = this.grille.map((row, r) => row.map((cell, c) => {
            var nbvoisin = this.cellulesVoisinesVivantes(r, c)

            // console.log("r, c", r, c);
            // console.log("nbVoisin", nbvoisin);


            if (cell === cellStatus.dead && (nbvoisin === 3 || nbvoisin === 6)) {
                return cellStatus.alive
            }
            else if (nbvoisin < 2 || nbvoisin > 3) {
                return cellStatus.dead
            }
            else {
                return cell
            }
        }))
    }


}

module.exports = { Grille };
