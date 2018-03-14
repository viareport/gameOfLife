package kata

fun main(args: Array<String>) {
    val n1 = try {
        Integer.valueOf(args[0])
    } catch (e: Exception) {
        10
    }
    val n2 = try {
        Integer.valueOf(args[1])
    } catch (e: Exception) {
        20
    }
    val iterations = try {
        Integer.valueOf(args[1])
    } catch (e: Exception) {
        20
    }

    val grille = mutableMapOf<Int, MutableMap<Int, Case>>()
    (0..n1).forEach { x ->
        (0..n2).forEach { y ->
            val random = Math.random()
            if (random > 0.6) {
                grille.computeIfAbsent(y, { mutableMapOf() })!![x] = Case.Pleine(Cellule.Vivante())
            }
        }
    }

    var biotope = Biotope(n1, n2, grille)

    (0..iterations).forEach { iteration ->
        println("Itération $iteration")
        println(biotope)
        println("-------------------------------------------")
        biotope = biotope.generateNext()
    }

}