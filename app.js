const express = require("express")
const path = require("path")

const home = require("./router/home")
const music = require("./router/music")

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(`public`))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))
app.use("/music", express.static(__dirname + "public/music"))

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.use(home);
app.use("/music", music)

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
})

app.listen(port, () => console.info(`Listening on port ${port}`))