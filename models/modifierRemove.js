const mongoose = require('mongoose');

let modifierRemoveSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    target_name: String,
    inflictor_name: String
});

module.exports = mongoose.model('modifierRemove', modifierRemoveSchema);
