const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get All Users
router.get('/', async (req, res) => {
    const users = await loadAllUsers();
    res.send(await users.find({}).toArray());
})

// Get User
router.post('/getuser', async (req, res) => {
    const users = await loadAllUsers();
    const user = await users.find({"_id": mongodb.ObjectID(req.body.id)}).toArray()
    res.send(user[0]);
})

//Add User
router.post('/', async(req, res) => {
    console.log("skata");
    const users = await loadAllUsers();
    await users.insertOne({
        name: req.body.name,
        email: req.body.name,
        password: req.body.password,
        personal: {
            birthdate: null,
            patronym: null,
            mothers_name: null,
            gender: null,
            birth_country: null,
            birth_city: null,
            residence_country: null,
            res_addr: null,
            tk: null,
            afm: null
        },
        conntact_details: {
            tel: null,
        },
        applications: {
            completed: [],
            submited: [],
            saved: []
        }
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

// Update User
router.post('/update', async(req, res) => {
    console.log("skata");
    const users = await loadAllUsers();
    console.log(req.body)
    const u = await users.updateOne(
        {"_id": mongodb.ObjectID(req.body.id)},
        {
            $set: {
                name: req.body.name,
                // email: req.body.name,
                // password: req.body.password,
                personal: {
                    birthdate: req.body.birthdate,
                    patronym: req.body.patronym,
                    mothers_name: req.body.mothers_name,
                    gender: req.body.gender,
                    birth_country: req.body.birth_country,
                    birth_city: req.body.birth_city,
                    residence_country: req.body.residence_country,
                    res_addr: req.body.res_addr,
                    tk: req.body.tk,
                    afm: req.body.afm
                }
            }
        }
    );
    console.log(req.params.id);
    console.log(u);
    res.send(u);
    // res.status(201).send();
})


// UPdate User Contact Info
router.post('/update/', async(req, res) => {
    console.log("skata");
    const users = await loadAllUsers();
    const u = await users.updateOne(
        {"_id": mongodb.ObjectID(req.body.id)},
        {
            $set: {
                contact: {
                    mail: req.body.mail,
                    tel: req.body.tel
                }
            }
        }
    );
    console.log(req.params.id);
    console.log(u);
    // res.send(u);
    res.status(201).send();
})

async function loadAllUsers() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://team15:doatapeam1@cluster0.mweve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Cluster0').collection('users');
}

module.exports = router;