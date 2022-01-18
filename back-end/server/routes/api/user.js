const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get User
router.get('/', async (req, res) => {
    const users = await loadAllUsers();
    res.send(await users.find({}).toArray());
})

//Add User
router.post('/', async(req, res) => {
    console.log("skata");
    const users = await loadAllUsers();
    await users.insertOne({
        name: req.body.name,
        email: req.body.name,
        password: req.body.password,
    });
    res.status(201).send();
})

//Delete User
router.delete('/:id', async (req, res) => {
    const users = await loadAllUsers();
    await users.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    res.status(200).send();
})

// login User
router.post('/login', async (req, res, next) => {
    const users = await loadAllUsers();
    console.log(req.body)
    const user = await users.find({"email": req.body.email}).toArray();
    // console.log(user[0].password)

    if(user != []) {

        if(user[0].password == req.body.password) {
            console.log("ok", user[0], req.body.password)
            res.send(user[0]);
        }
    }
    res.status(201).send();
});

async function loadAllUsers() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://team15:doatapeam1@cluster0.mweve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Cluster0').collection('users');
}

module.exports = router;