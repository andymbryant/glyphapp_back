const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let helloSchema = new Schema({
    name: String
});

module.exports = mongoose.model('hello', helloSchema);
