const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getName} = require(`./controller`)
const { getCompliment } = require('./controller')
const {getFortune} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.push("/api/name",nameInput);

app.listen(4000, () => console.log("Server running on 4000"));
