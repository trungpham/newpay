package controllers

/**
 * Created with IntelliJ IDEA.
 * User: trungpham
 * Date: 2/10/13
 * Time: 2:33 PM
 * To change this template use File | Settings | File Templates.
 */

import play.api._
import play.api.mvc._
import play.api.libs.json._

object Payments extends Controller{

  def index = Action { implicit request =>
    render {
      case Accepts.Json() => Ok(Json.arr(
          Json.obj(
            "type" -> "CreditCard",
            "acceptedCardBrands" -> Json.arr(
              "Visa", "MasterCard", "Discover", "AmericanExpress"
            )
          ),
          Json.obj(
            "type" -> "PayPal"
          )
        )
      )
    }
  }
}
