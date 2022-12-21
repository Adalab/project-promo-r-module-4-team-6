const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

const savedCards = [];

server.post('/card', (req, res) => {
  if (!req.body.name || !req.body.job || !req.body.email || !req.body.phone || !req.body.photo || !req.body.linkedin || !req.body.github) {
    // ERROR
    const responseFalse = {
      error: 'Mandatory fields',
      success: false,
    };
    res.json(responseFalse);
  } else {
    const newCard = {
      id: uuid(),
      ...req.body,
    };

    savedCards.push(newCard);

    const responseSuccess = {
      cardURL: `https://localhost:4000/card/${newCard.id}`,
      success: true,
    };
    res.json(responseSuccess);
    // gGuardo la tarjeta y devuelvo success
  }
});

//express III // motor de plantillas
server.get('card/id', (req, res) => {
  //pintar la tarjeta
});
