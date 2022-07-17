// Connect to the MongoDB
const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/Computer",
    { useNewUrlParser: true, useUnifiedTopology: true }
    //proper connect dont show any depricacy..
)//this method returns promise so handle it..
    .then(() => console.log("connected with database")).

    catch((e) =>
        console.log(err));
