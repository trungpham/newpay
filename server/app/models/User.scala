package models

/**
 * Created with IntelliJ IDEA.
 * User: trungpham
 * Date: 3/4/13
 * Time: 11:41 PM
 * To change this template use File | Settings | File Templates.
 */

import scala.slick.driver.MySQLDriver.simple._

case class User(id: Option[Int], firstName: String, lastName: String)

object Users extends Table[User]("user") {

  def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
  def firstName = column[String]("firstName")
  def lastName = column[String]("lastName")
  def * = id.? ~ firstName ~ lastName <> (User, User.unapply _)
}
