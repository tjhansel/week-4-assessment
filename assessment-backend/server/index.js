const express = require("express");
const cors = require("cors");
// The good news is I fixed the network error. The bad news is I have no idea how I did it.
const app = express();

app.use(cors());

app.use(express.json());

const fController = require('./controller')

const {addName, getCompliment, getFortune} = fController



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/name", (req,res) =>{
   console.log(req.body)
    let name = req.body.nameInput
    res.status(200).send(`Hello ${name}! It is time for your fortune.`)
})

app.listen(4000, () => console.log("Server running on 4000"));
