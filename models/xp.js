const mongoose = require('mongoose');

let xpSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    xp_value: Number
});

module.exports = mongoose.model('xp', xpSchema);
