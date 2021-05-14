const express = require('express')
const emogi = require('./emoji/EmojiGenerator')

const app = express()
const port = 3000

app.get('/casino', (req, res) => {
  if(Math.round(Math.random())){
    res.send(emogi.Generator.genWin())
  }else {
    res.send(emogi.Generator.genLose())
  }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})