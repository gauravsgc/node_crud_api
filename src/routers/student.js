const express = require('express');
const router = new express.Router();
const app = express();
const STUDENT = require("../models/students")//it has to include
const counter=require("../models/counters")
app.use(express.json())//data in json form recognize
//create new router...
// router.get("/Myapp", (req, res) => {
//     res.send("hello");
// })
//..............................
//insert data by using promises..
router.post("/Myapp", (req, res) => {

    //res.send("hi");
    console.log("this is post");
    
    /*direct from body..
    const user = new STUDENT(req.body);
    console.log(user);
    /*.................*/
    
    /*.............auto increment   ...*/
    counter.findOneAndUpdate
    (
        {id:'autoval'},
    {"$inc":{"seq":1}},
{new:"true"},(err,cd)=>{
    let seqId;
    if(cd==null){
        const newval=new counter({id:"autoval",seq:1})
        console.log(newval);
        console.log("hello new value");
        newval.save();
        seqId=1;

    }
    else{
        seqId=cd.seq;
    }

   const data=new STUDENT({
            username:req.body.username,
            userpass:req.body.userpass,
            id:seqId
        })
        data.save();
})
res.send('posted');
}

        )
    /*...................*/
/*...data save start.....*/
//     user.save().then(() => {
//         res.status(201).send(user)
//         //res.send('succesfull')
//     }).
//         catch((e) => {
//             //res.send(e);
//             res.status(400).send(e)
//         }
//         );
// })
/*...data save end....*/
//.......................

//insert by using async and await
//{"name":"gaurav","rollno":"2"}json postman
router.post("/Myapp", async (req, res) => {

    //res.send("hi");
    try {
        const user = new STUDENT(req.body);
        console.log(user);
        // await user.save().status(201).send(user);
    }
    catch (e) {
        //res.send(e);
        res.status(400).send(e)
    }

 


})

// ..........
//the rule of api is the root has to be same..
router.get('/Myapp', async (req, res) => {
    //app.get('/students/:id', async (req, res) => {
    try {
        console.log("gud morning");
        //const id=req.params.id;
        // const Data = await STUDENT.findById({_id:id}//{_id}//{key:value});
        const Data = await STUDENT.find();
        res.send(Data);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//fetching only one data from the api...
router.get('/Myapp/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // const Data = await STUDENT.find({ name: name });//{key:value});
        const Data = await STUDENT.find(
            { id: id });//{key:value});
        res.send(Data);
    }
    catch (e) {
        res.status(500).send(e);
    }
})



//...............


//delete data....
router.delete('/Myapp/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        //STUDENT.findByIdAndDelete(req.params.id)if id as parameter

        const Data = await STUDENT.deleteOne({ id: id });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})




//.............


//update data.....

//patch
router.put('/Myapp/:name/:pwd', async (req, res) => {
    try {
        const name = req.params.name;
        const pwd = req.params.pwd;
        console.log(name);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        //findByIdAndUpdate(_id,req.body,{new:true})//updated data
        const Data = await STUDENT.updateOne({ username: name }, { $set: { userpwd: pwd } });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})



//..............
//patch
router.put('/Myapp/:id', async (req, res,next) => {
    try {
        console.log(req.params.id);
        const username = req.body.username;
        const userpass = req.body.userpass;
        console.log(username+""+userpass);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        //findByIdAndUpdate(_id,req.body,{new:true})//updated data
        const Data = await STUDENT.updateOne({ username: username }, { $set: { userpass:userpass  } });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;