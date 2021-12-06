const express = require('express');
const app = express();
const axios = require("axios")
const port = 5000;
const characters = require('./characters.json')

    //Exercice1
        //1

app.get('/game-of-thrones/json/characters', (req, res) => {
    res.send(characters);
  });

        //2
app.get('/game-of-thrones/url/characters', (req, res) => {
res.send(characters);
});

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});