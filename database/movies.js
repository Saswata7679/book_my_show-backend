const mongoose = require("mongoose");

//create movies schema
const MoviesSchema = mongoose.Schema({
    imageurl: String,
    title: String,
    text: String
});

const MoviesModel = mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;