const { Schema, model } = require("mongoose");


const memberSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  exp: Number,
  type: String,
  qualification: String,
});

const memberModel = model('member',memberSchema);

module.exports = memberModel;
