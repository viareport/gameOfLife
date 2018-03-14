const cellStatus = {
  empty: 0,
  alive: 1,
  dead: 2
}


class Grille {

  constructor(nbLignes, nbColonnes) {
    this.nbLignes = nbLignes;
    this.nbColonnes = nbColonnes;
    this.grille = [];
    for (let i = 0; i < nbLignes; i++) {
      for (let j = 0; j < nbColonnes; j++) {
        if (!this.grille[i]) {
          this.grille[i] = [];
        }
        this.grille[i][j] = this.getRandomInt(3); // 0 - vide, 1 - alive, 2 - morte
      }
    }

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  afficher() {
    let affichage = this.grille.map((row) => row.map((cell) => cell === cellStatus.alive ? 'A' : cell === cellStatus.dead ? 'd' : '-').join("\t")).join("\n")
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

    nb += this.getCellule(ligne - 1, colonne - 1) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne - 1, colonne) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne - 1, colonne + 1) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne, colonne - 1) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne, colonne + 1) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne + 1, colonne - 1) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne + 1, colonne) === cellStatus.alive ? 1 : 0;
    nb += this.getCellule(ligne + 1, colonne + 1) === cellStatus.alive ? 1 : 0;

    return nb;
  }

  generateNextState() {
    this.grille = this.grille.map((row, r) => row.map((cell, c) => {
      var nbvoisin = cellulesVoisinesVivantes(r, c)
      if (nbvoisin < 2 || nbvoisin > 3) {
        return cellStatus.dead
      }
      else {
        return cell
      }
    }))
  }


}

module.exports = { Grille };
