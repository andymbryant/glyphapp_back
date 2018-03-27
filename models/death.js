const mongoose = require('mongoose');

let deathSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    target_name: String
});

module.exports = mongoose.model('death', deathSchema);
