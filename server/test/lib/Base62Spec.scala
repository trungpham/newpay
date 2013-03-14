import lib.Base62

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._



class Base62Spec extends Specification{

  "Base62" should {

    "encode and decode" in {
      val raw = BigInt("6677778888999998888999999999999999999999999")
      val encoder = new Base62()
      val encoded = encoder.encode(raw)
      encoded mustNotEqual(raw)
      raw mustEqual(encoder.decode(encoded))
    }
  }
}
