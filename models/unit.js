var mongoose = require('mongoose');

var unitSchema = new mongoose.Schema({
    name: String,
    race: String,
    hitpoints: Number,
    armor: Number,
    damage: Number,
    race: { type: String, ref: 'races' }
});

module.exports = mongoose.model('units', unitSchema);