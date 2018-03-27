const mongoose = require('mongoose');

let purchaseSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    xp_value: Number
});

module.exports = mongoose.model('purchase', purchaseSchema);
