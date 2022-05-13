const express = require("express")
const router = express.Router()

router.get("", function(req, res) {
  res.render("music/index")
})

router.get("/home", function(req, res) {
  res.render("music/index")
})

module.exports = router