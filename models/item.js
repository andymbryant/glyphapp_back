const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    target_name: String
});

module.exports = mongoose.model('item', itemSchema);
