const express = require('express')
const emoji = require('./emoji/EmojiGenerator')

const app = express()
const port = 3000

app.get('/casino', (req, res) => {
  if(Math.round(Math.random())){
    res.send(emoji.Generator.genWin())
  }else {
    res.send(emoji.Generator.genLose())
  }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})