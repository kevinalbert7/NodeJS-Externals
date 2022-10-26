const express = require('express')
const app = express()
const axios = require('axios')

const characters = require('../characters.json')

app.get('/json', (req, res) => {
  res.send(characters)
})

app.get('/url', (req, res) => {
  axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.send(response.data))
    .catch(error => res.status(error.response.status).send('Not found'))
  res.send(characters)
})

module.exports = app