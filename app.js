const express = require("express")
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(`public`))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("", (req, res) => {
  res.render("home", { text: "Home Page"})
})

app.get("/home", (req, res) => {
  res.render("home", { text: "Home Page"})
})
app.get("/about", (req, res) => {
  res.render("about", { text: "About Page"})
})
app.get("/music/test", (req, res) => {
  res.render("test", { text: "Test for Music Page"})
})

app.listen(port, () => console.info(`Listening on port ${port}`))