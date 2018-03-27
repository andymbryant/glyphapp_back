const mongoose = require('mongoose');

let goldSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    gold_value: Number
});

module.exports = mongoose.model('gold', goldSchema);
