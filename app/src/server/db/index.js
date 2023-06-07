const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost/goty';

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri);

// Create a mongoose schema for our mongo database
// Declare the shape of the `Games` collection in the `Games` database
const GameSchema = new Schema(
  {
    name: String,
    released: String,
    background_img: String,
  }
);

module.exports = {
  Tasks: model('Games', GameSchema),
};