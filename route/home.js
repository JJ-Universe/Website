const express = require("express")
const router = express.Router()

router.get("", function(req, res) {
  res.render("comingsoon")
})

router.get("/home", function(req, res) {
  res.render("comingsoon")
})

module.exports = router