package kata

class Biotope(val x: Int, val y: Int) {

    val grille: Map<Int, Map<Int, Case>> = (0..this.y).associate { y ->
        y to (0..this.x).associate { x ->
            x to if( Math.random() * 10 > 7) {
                Case.Vide()
            }
            else {
                Case.Pleine()
            }
        }
    }

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

        var out = "";
        for((yKey, map) in grille) {
            for((xKey, case) in map) {
                out += case.toString()
            }
            out += "\n"
        }

        return out;
    }
}

sealed class Case() {
    class Vide(): Case() {
        override fun toString(): String {
            return "0"
        }
    }

    class Pleine(): Case() {
        override fun toString(): String {
            return "1"
        }
    }
}

sealed class Cellule() {
    class Morte(): Cellule()
    class Vivante(): Cellule()
}
