var mongoose = require('mongoose');

var charactersSchema = new mongoose.Schema({
    name: String,
    race: { type: String, ref: 'races' },
    gender: String,
    image: String
});

module.exports = mongoose.model('characters', charactersSchema);