
class Grille {

    constructor(nbLignes, nbColonnes) {
        this.nbLignes = nbLignes;
        this.nbColonnes = nbColonnes;
        this.grille = [];
        for(let i = 0; i < nbLignes; i++) {
            for(let j = 0; j < nbColonnes; j++) {
                if(!this.grille[i]) {
                    this.grille[i] = [];
                }
                this.grille[i][j] = this.getRandomInt(2);
            }
        }

    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    afficher() {
        let affichage = "";
        for(let i = 0; i < this.nbLignes; i++) {
            for(let j = 0; j < this.nbColonnes; j++) {
                affichage = affichage +this.grille[i][j];

            }
            affichage += "\n";
        }
        console.log(affichage);
    }

    getCellule(ligne, colonne) {
        if(!this.grille[ligne] || this.grille[ligne][colonne]) {
            return null;
        }
        return this.grille[ligne][colonne];
    }


}

module.exports = {Grille};