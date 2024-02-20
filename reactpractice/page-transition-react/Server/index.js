const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Carmodel = require("./models/Carmodel");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://tahaakber25:lumia123@cluster0.iu8teo7.mongodb.net/Cars?retryWrites=true&w=majority"
);
app.get(
  app.get("/car", async (req, res) => {
    try {
      const result = await Carmodel.find({});
      res.json(result);
    } catch (error) {
      console.log(error, "This is the error");
    }
  })
);
app.listen(3001, () => {
  console.log("Connected at port:", 3001);
});
