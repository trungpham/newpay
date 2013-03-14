package lib

/**
 * Created with IntelliJ IDEA.
 * User: trungpham
 * Date: 3/13/13
 * Time: 9:27 PM
 * To change this template use File | Settings | File Templates.
 */
class Base62(baseString: String = ((0 to 9) ++ ('A' to 'Z') ++ ('a' to 'z')).mkString) {

  val base = 62

  def using[A, R <: { def close() }](r: R)(f: R => A): A =
    try { f(r) } finally { r.close() }

  if (baseString.size != base) {
    throw new IllegalArgumentException("baseString length must be %d".format(base))
  }

  def decode(s: String): BigInt = {
    s.zip(s.indices.reverse)
      .map { case (c, p) => BigInt(base).pow(p) * baseString.indexOf(c) }
      .sum
  }

  def encode(i: BigInt): String = {

    @scala.annotation.tailrec
    def div(i: BigInt, res: List[Int] = Nil): List[Int] = {
      (i / base) match {
        case q if q > 0 => div(q, (i % base).toInt :: res)
        case _ => i.toInt :: res
      }
    }

    div(i).map(x => baseString(x)).mkString
  }

}
