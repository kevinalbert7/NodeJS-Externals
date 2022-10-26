const express = require('express')
const app = express()
const axios = require('axios')
const port = 5000

const gameOfThrones = require('./routes/game-of-thrones')
const pokemon = require('./routes/pokemon')

app.use('/game-of-thrones', gameOfThrones)
app.use('/pokemon', pokemon)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})