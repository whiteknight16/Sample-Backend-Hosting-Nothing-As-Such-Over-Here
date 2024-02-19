const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => res.send("Hey Buddy You are at homepage!"));

app.get("/api/v1/instagram", (req, res) => {
  const instaVar = {
    username: "Johanson",
    follower: 50,
    follows: 1,
    date: new Date().toISOString().slice(0, 10),
  };

  res.status(200).json(instaVar);
});
app.get("/api/v1/facebook", (req, res) => {
  const facebookVar = {
    username: "Jamison",
    follower: 500,
    follows: 10,
    date: new Date().toISOString().slice(0, 10),
  };

  res.status(200).json(facebookVar);
});
app.get("/api/v1/linkedin", (req, res) => {
  const linkedinVar = {
    username: "Johanson",
    follower: 5000,
    follows: 1,
    date: new Date().toISOString().slice(0, 10),
  };

  res.status(200).json(linkedinVar);
});

app.get("/api/v1/:something", (req, res) =>
  res.status(200).send(req.params.something)
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
