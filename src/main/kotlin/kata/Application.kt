package kata

fun main(args: Array<String>) {
    val n1 = try {
        Integer.valueOf(args[0])
    } catch (e: Exception) {
        80
    }
    val n2 = try {
        Integer.valueOf(args[1])
    } catch (e: Exception) {
        80
    }

    val biotope = Biotope(n1, n2)

    println(biotope)
}

fun add(n1: Int, n2: Int) = n1 + n2