const mongoose = require('mongoose');
let counterSchema= new mongoose.Schema({
    id:String,
    seq:Number
    },{collection:'counter'});
module.exports = mongoose.model("counter", counterSchema);