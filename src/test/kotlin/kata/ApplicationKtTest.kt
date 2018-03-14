package kata

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class ApplicationKtTest {

    @Test
    fun `add should return sum`() {
        assertThat(add(1, 2)).isEqualTo(3)
    }

    @Test
    fun `un biotope a 2 dimensions`() {
        val biotope = Biotope(42, 24)
        assertThat(biotope.x).isEqualTo(42)
        assertThat(biotope.y).isEqualTo(24)
    }

    @Test
    fun `on peut accéder aux cases d'un biotopes par ses coordonnées`() {
        val biotope = Biotope(42, 24)

        val case = biotope.getCase(12, 21)
        assertThat(case).isNotNull()
    }

    @Test(expected = CaseOutOfBounds::class)
    fun `si on demande au biotope une case en dehors de son périmètre, il nous balance une exception`() {
        val biotope = Biotope(42, 24)

        val case = biotope.getCase(43, 21)
    }
}



