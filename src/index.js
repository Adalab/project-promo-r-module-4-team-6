const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');
const Database = require('better-sqlite3');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

// init express aplication
const serverPort = process.env.PORT;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
const db = new Database('./src/database/database.db', {
  verbose: console.log,
});

const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

server.post('/card', (req, res) => {
  if (!req.body.name || !req.body.job || !req.body.email || !req.body.phone || !req.body.photo || !req.body.linkedin || !req.body.github) {
    // ERROR
    const responseFalse = {
      error: 'Mandatory fields',
      success: false,
    };
    res.json(responseFalse);
  } else {
    const newCard = req.body;

    const insertStmt = db.prepare('INSERT INTO cards (palette, name, job, photo, email, phone, linkedin, github) VALUES (?,?,?,?,?,?,?,?)');

    const result = insertStmt.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.photo,
      newCard.email,
      newCard.phone,
      newCard.linkedin,
      newCard.github
    );
    console.log(result);
    const responseSuccess = {
      cardURL: `https://project-promo-r-module-4-team-6-production.up.railway.app/card/${result.lastInsertRowid}`,
      success: true,
    };
    res.json(responseSuccess);
    // gGuardo la tarjeta y devuelvo success
  }
});

//express III // motor de plantillas
server.get('/card/:id', (req, res) => {
  const id = req.params.id;
  const query = db.prepare('SELECT * FROM cards WHERE id = ?');
  const userCard = query.get(id);

  res.render('card', userCard);
  console.log(userCard);
});

const staticServerCSSPath = './src/public-styles';
server.use(express.static(staticServerCSSPath));
