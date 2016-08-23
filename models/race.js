var mongoose = require('mongoose');

var raceSchema = new mongoose.Schema({
    name: String,
    base: String,
    characters: Array
});

module.exports = mongoose.model('races', raceSchema);