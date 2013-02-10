package controllers

import play.api.mvc._
import play.api.libs.json.Json

/**
 * Created with IntelliJ IDEA.
 * User: trungpham
 * Date: 2/10/13
 * Time: 2:33 PM
 * To change this template use File | Settings | File Templates.
 */
object PaymentProfiles extends Controller{
  def index = Action { implicit request =>
    render {

      //[
      //
      //
      //                {
      //                    type: "CreditCard",
      //                    cardBrand: "Visa",
      //                    last4: "4448",
      //                    expiryMonth: "10",
      //                    expiryYear: "14"
      //                },
      //                {
      //                    type: "CreditCard",
      //                    cardBrand: "MasterCard",
      //                    last4: "4448",
      //                    expiryMonth: "9",
      //                    expiryYear: "15"
      //                },
      //                {
      //                    type: "PayPal",
      //                    maskedEmail: "**user1@gmail.com"
      //                },
      //                {
      //                    type: "PayPal",
      //                    maskedEmail: "***user2@gmail.com"
      //                }
      //
      //
      //            ]
      case Accepts.Json() => Ok(Json.arr(
        Json.obj(
          "type" -> "CreditCard",
          "cardBrand" -> "Visa",
          "last4" -> "4448",
          "expiryMonth" -> "9",
          "expiryYear" -> "2015"
        ),
        Json.obj(
          "type" -> "CreditCard",
          "cardBrand" -> "MasterCard",
          "last4" -> "8888",
          "expiryMonth" -> "10",
          "expiryYear" -> "2014"
        ),
        Json.obj(
          "type" -> "PayPal",
          "maskedEmail" -> "***user1@gmail.com"
        ),
        Json.obj(
          "type" -> "PayPal",
          "maskedEmail" -> "***user2@gmail.com"
        )
      )
      )
    }
  }
}
