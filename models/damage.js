const mongoose = require('mongoose');

let damageSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    target_name: String,
    inflictor_name: String,
    attack_damage: Number,
    health_remaining: Number
});

module.exports = mongoose.model('damage', damageSchema);
