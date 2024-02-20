const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  carname: {
    String,
    required: true,
  },
  modelNo: {
    Number,
    required: true,
  },
  price: {
    Number,
    required: true,
  },
});

const Carmodel = mongoose.model("Cars", schema);
module.exports = Carmodel;
