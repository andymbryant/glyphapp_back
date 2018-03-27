const mongoose = require('mongoose');

let updateSchema = mongoose.Schema({
    timestamp: Number,
    source_name: String,
    kills: Number,
    deaths: Number,
    assists: Number,
    last_hits: Number,
    total_gold: Number,
    total_xp: Number,
    teamfight_participation: Number,
    current_item_list: String,
    life_state: Number,
    x: Number,
    y: Number,
    team_id: Number
});

module.exports = mongoose.model('update', updateSchema);
