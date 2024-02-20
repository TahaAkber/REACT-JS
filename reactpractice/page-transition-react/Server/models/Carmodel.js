const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  modelNo: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Carmodel = mongoose.model("Models", schema);
module.exports = Carmodel;
