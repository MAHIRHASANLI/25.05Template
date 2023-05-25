const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const BizproModel = mongoose.model(
  "Bizpro",
  mongoose.Schema({
    image: String,
    name: String,
    title: String,
    about: String,
  })
);

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.get("/api/lists", async (req, res) => {
  const { name } = req.query;
  const GelAll = await BizproModel.find();
  if (!name) {
    res.status(200).send(GelAll);
  } else {
    const filterGettAl = GelAll.filter((m) =>
      m.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    res.status(200).send(filterGettAl);
  }
});
app.get("/api/lists/:id", async(req,res)=>{
  const id = req.params.id
  
  const GetById = await BizproModel.findById(id)
  res.status(200).send(GetById)
})


app.post('/api/lists', async (req, res) => {
  const { image, name, title, about } = req.body;
  const newObject = new BizproModel({
    image: image,
    name: name,
    title: title,
    about: about,
  });
  const nevobj = await newObject.save();
  res.status(200).send(nevobj);
});


app.delete('/api/lists/:id', async(req,res)=>{
  const id = req.params.id
  const Deleteobject = await BizproModel.findByIdAndDelete(id)
  res.status(200).send(Deleteobject)
})
PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`HERESEY YAXSIDIR ${PORT}`);
});

mongoose.connect(process.env.MY_CONNECTION).then(() => {
  console.log("Mongo DB Isleyir");
});
