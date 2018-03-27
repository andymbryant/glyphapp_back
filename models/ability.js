const mongoose = require('mongoose');

let abilitySchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    target_name: String,
    inflictor_name: String,
    ability_level: String,
    toggle_value: String
});

module.exports = mongoose.model('ability', abilitySchema);
