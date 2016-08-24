var mongoose = require('mongoose');

var unitSchema = new mongoose.Schema({
    name: String,
    race: String,
    life: Number,
    armor: Number,
    damage: Number,
    race: { type: String, ref: 'races' },
    image: String
});

module.exports = mongoose.model('units', unitSchema);