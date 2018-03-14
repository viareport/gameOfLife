package kata

class Biotope(val x: Int, val y: Int) {

    val grille: Map<Int, Map<Int, Case>> = (0..this.y).associate { y ->
        y to (0..this.x).associate { x ->
            x to Case.Vide() } }

    fun getCase(x: Int, y: Int): Case {
        if (x > this.x  || x < 0) {
            throw CaseOutOfBounds()
        }
        if (y > this.y || y < 0) {
            throw CaseOutOfBounds()
        }

        return grille[x]!![y]!!
    }

    override fun toString(): String {
        var display = ""
        (0..this.x).forEach { i ->
            (0..this.y).forEach { j ->
                val case = getCase(i, j)
                display += if(case.isVivante()) {
                    "1"
                } else {
                    "0"
                }
            }
            display += "\n"
        }
        return display
    }

    fun getNbVoisinsVivants(x: Int, y: Int): Int {
        var nbVoisins = 0
        (x-1..x+1).forEach { i ->
            (y-1..y+1).forEach { j ->
                if(i != x && j != y) {
                    try{
                        val case = getCase(i, j)
                        if(case.isVivante()) {
                            nbVoisins += 1
                        }
                    } catch(e: CaseOutOfBounds) {
                        // on est en dehors de la grille, on ignore
                    }
                }
            }
        }
        return nbVoisins
    }

    fun generateNext(): Biotope {
        val biotope = Biotope(this.x, this.y)


        return biotope
    }

}

sealed class Case() {
    class Vide(): Case() {
        override fun isVivante(): Boolean = false
    }
    class Pleine(val cellule: Cellule): Case() {
        override fun isVivante(): Boolean = cellule is Cellule.Vivante
    }

    abstract fun isVivante(): Boolean
}

sealed class Cellule() {
    class Morte(): Cellule()
    class Vivante(): Cellule()
}
