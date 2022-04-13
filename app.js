const express = require("express")
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(`public`))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))
app.use("/music", express.static(__dirname + "public/music"))

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("", (req) => {
  res.render("home")
})

app.get("/home", (req) => {
  res.render("home")
})
app.get("/about", (req) => {
  res.render("about")
})
app.get("/music/home", (req) => {
  res.render("music/selection")
})
app.get("/music/player", (req) => {
  res.render("music/player/index")
})

app.listen(port, () => console.info(`Listening on port ${port}`))