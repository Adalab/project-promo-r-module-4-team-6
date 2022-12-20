const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({limit: "25mb"}));


// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card', (req, res) =>{

  if( !req.body.name || !req.body.job || !req.body.email || !req.body.phone || !req.body.photo || !req.body.linkedin || !req.body.github ) {
    // ERROR 
    const responseFalse = {
      error: "Mandatory fields",
      success: false
    }
    res.json(responseFalse);
  }
  else { 
    const responseSuccess = {
      cardURL: 'https://dev.adalab.es/card/8686837722797',
      success: true
    };
  res.json(responseSuccess);
    // gGuardo la tarjeta y devuelvo success
  }

});


//express III
server.get('card/id', (req, res) => {
//pintar la tarjeta

});