const express = require('express')
var path = require('path');
const app = express()

PUBLIC_DIR = path.join(__dirname,'public','build')

app.set('views', './app');
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public','build')));

app.listen(8081, function () {
  console.log('Example app listening on port 8081')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
  // res.render('index.pug')
})
