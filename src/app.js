const express = require('express');
require("./db/cone");
const app = express();
const STUDENT = require("./models/students")
const studentRouter = require('./routers/student')
//const port = process.env.PORT || 5000;
//this port u have given to load in the server
var cors = require('cors')
app.use(express.json())//data in json form recognize
app.use(cors()) // Use this after the variable declara
app.use(studentRouter);
//insert data by using promises..
/*app.post("/students", (req, res) => {

    //res.send("hi");
    const user = new STUDENT(req.body);
    console.log(user);
    user.save().then(() => {
        res.status(201).send(user)
        //res.send('succesfull')
    }).
        catch((e) => {
            //res.send(e);
            res.status(400).send(e)
        }
        );
})*/
//.......................

//insert by using async and await
/*
app.post("/students", async (req, res) => {

    //res.send("hi");
    try {
        const user = new STUDENT(req.body);
        console.log(user);
        await user.save().status(201).send(user);
    }
    catch (e) {
        //res.send(e);
        res.status(400).send(e)
    }




})
*/
// ..........
/*
app.get('/students', async (req, res) => {
    //app.get('/students/:id', async (req, res) => {
    try {
        //const id=req.params.id;
        // const Data = await STUDENT.findById({_id:}//{key:value});
        const Data = await STUDENT.find();
        res.send(Data);
    }
    catch (e) {
        res.status(500).send(e);
    }
})
*/
//fetching only one data from the api...
/*app.get('/students/:nm', async (req, res) => {
    try {
        const name = req.params.nm;

        const Data = await STUDENT.find({ name: name });//{key:value});

        res.send(Data);
    }
    catch (e) {
        res.status(500).send(e);
    }
})


*/
//...............


//delete data....
/*
app.delete('/students/:rlno', async (req, res) => {
    try {
        const rollno = req.params.rlno;
        console.log(rollno);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        const Data = await STUDENT.deleteOne({ rollno: rollno });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})



*/
//.............


//update data.....

/*
app.put('/students/:rlno', async (req, res) => {
    try {
        const rollno = req.params.rlno;
        console.log(rollno);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        const Data = await STUDENT.updateOne({ rollno: rollno }, { $set: { rollno: 12 } });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})

*/

//..............



/*app.post("/students", (req, res) => {

    res.send("hi");

})*/
/*
app.listen(port, () => {
    console.log('connected');
})
*/
app.listen(4000);