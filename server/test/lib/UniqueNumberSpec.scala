import lib.UniqueNumber

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._



class UniqueNumberSpec extends Specification{

  "UniqueNumber" should {

    "generate BigInt" in {
      UniqueNumber.generateBigInt must haveClass[BigInt]
      UniqueNumber.generateBigInt > 0 must beTrue
      UniqueNumber.generateBigInt must not equalTo(UniqueNumber.generateBigInt)
    }

    "generate Base62" in {
      UniqueNumber.generateBase62 must haveClass[String]
      UniqueNumber.generateBase62.length must beGreaterThan(0)
      UniqueNumber.generateBase62 must not equalTo(UniqueNumber.generateBase62)
    }
  }
}
