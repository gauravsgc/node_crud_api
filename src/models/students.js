const mongoose = require('mongoose');
//const validator=require("validator");
let StudentSchema = new mongoose.Schema({

    // _id: mongoose.Schema.Types.ObjectId,
//before..
    //name: String,
                         //required:true
    //rollno: String,
//after:--
username:String,
userpass:String,
id:Number


}, { collection: 'example' });
//we will create collection schema create



module.exports = mongoose.model("example", StudentSchema);
