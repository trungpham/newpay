package test

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

import play.api.db.DB
import models.{Users, User}

import play.api.Application
import play.api.Play.current

import scala.slick.driver.MySQLDriver.simple._
// Use the implicit threadLocalSession
import Database.threadLocalSession

class UserSpec extends Specification {
  lazy val database = Database.forDataSource(DB.getDataSource())
  "User" should {
    "Query" in {
      running(FakeApplication()) {
        database withSession{
          //Users.insert(User(None, "trung", "pham"))
        }
      }
      "Hello world" must have size(11)
    }
  }
}
