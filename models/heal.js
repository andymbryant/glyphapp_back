const mongoose = require('mongoose');

let healSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    target_name: String,
    inflictor_name: String,
    heal_value: Number,
    health_remaining: Number
});

module.exports = mongoose.model('heal', healSchema);
