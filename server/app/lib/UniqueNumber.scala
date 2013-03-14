package lib

import java.util.UUID

object UniqueNumber{
  val base62 = new Base62()


  def generateBase62 : String = {

    base62.encode(generateBigInt)

  }

  def generateBigInt : BigInt = {
    val uuid = UUID.randomUUID
    ((BigInt(uuid.getMostSignificantBits) << 64) & BigInt(uuid.getLeastSignificantBits)).abs
  }
}