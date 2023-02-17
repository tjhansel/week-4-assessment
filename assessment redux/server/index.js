const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortunes', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.json({ fortune: randomFortune });
});
app.post('/api/fortunes', (req, res) => {
    const newFortune = req.body.fortune;
    fortunes.push(newFortune);
    const fs = require('fs');
    fs.writeFile('./fortunes.json', JSON.stringify(fortunes), (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });
  app.post('api/name', (req, res) => {
    const name = req.body.name;
    res.json({ name: name });
  });
    app.listen(4000, () => console.log("Server running on 4000"));
