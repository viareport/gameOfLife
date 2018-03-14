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
        (0..this.y).joinToString("\n") { y ->
            (0..x).joinToString("")
        }
    }

}

sealed class Case() {
    class Vide(): Case() {

    }
    class Pleine(val cellule: Cellule): Case()
}

sealed class Cellule() {
    class Morte(): Cellule()
    class Vivante(): Cellule()
}
