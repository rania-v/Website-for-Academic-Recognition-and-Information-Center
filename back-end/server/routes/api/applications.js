const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get All Applications
router.get('/', async (req, res) => {
    const applications = await loadAllApplications();
    res.send(await applications.find({}).toArray());
})

// Get Application
router.post('/getuser', async (req, res) => {
    const applications = await loadAllApplications();
    const application = await applications.find({"_id": mongodb.ObjectID(req.body.id)}).toArray()
    res.send(application[0]);
})

//Add Application
router.post('/', async(req, res) => {
    console.log("skata");
    const applications = await loadAllApplications();
    await applications.insertOne({

        application: req.body.application
        // genika: {
            // status: req.body.status,
            // type: req.body.type,
            // st_level: req.body.level,
            // antistoixia: req.body.antistoixia,
            // aei: req.body.aei,
            // tei: req.body.tei,
            // sunektimhsh: req.body.sinektimhsh,
            // bathm_ant: req.body.bathm_ant,
        // },
        // vasikos_titlos: {
        //     type: req.body.vasikos.type,
        //     uni: req.body.vasikos.uni,
        //     title: req.body.vasikos.title,
        //     credits: req.body.vasikos.credits,
        //     eggrafh: req.body.vasikos.eggrafh,
        //     apofoitish: req.body.vasikos.apofoitish,
        //     eth: req.body.vasikos.eth,
        //     ant_me_aei: req.body.vasikos.ant_me_aei,
        //     ant_me_tei: req.body.vasikos.ant_me_tei,
        // },
        // metaptyxiako: {
        //     type: req.body.metaptyxiako.type,
        //     uni: req.body.metaptyxiako.uni,
        //     title: req.body.metaptyxiako.title,
        //     credits: req.body.metaptyxiako.credits,
        //     eggrafh: req.body.metaptyxiako.eggrafh,
        //     apofoitish: req.body.metaptyxiako.apofoitish,
        //     eth: req.body.metaptyxiako.eth,
        //     ant_me_aei: req.body.metaptyxiako.ant_me_aei,
        //     ant_me_tei: req.body.metaptyxiako.ant_me_tei,
        // },
        // personal: {

        // },
        // diakiologhtika: {
        //     paravolo: req.body.dik.paravolo,
        //     identity: req.body.dik.identity,
        //     dhlwsh: req.body.dik.dhlwsh,
        //     vasiko: {
        //         ptuxio: req.body.dik.vasiko.ptyxio,
        //         pistopoihsh: req.body.dik.vasiko.pistopoihsh
        //     },
        //     metaptyxiako: {
        //         ptyxio: req.body.dik.metaptyxiako.ptyxio,
        //         ergasia: req.body.dik.metaptyxiako.ergasia,
        //         pistopoihsh: req.body.dik.metaptyxiako.pistopoihsh
        //     }
        // },
        // sxolia: req.body.sxolia

    });
    res.status(201).send();
})

//Delete Application
router.delete('/:id', async (req, res) => {
    const applications = await loadAllUsers();
    await applications.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    res.status(200).send();
})

// // Update User
// router.post('/update', async(req, res) => {
//     console.log("skata");
//     const users = await loadAllUsers();
//     console.log(req.body)
//     const u = await users.updateOne(
//         {"_id": mongodb.ObjectID(req.body.id)},
//         {
//             $set: {
//                 name: req.body.name,
//                 // email: req.body.name,
//                 // password: req.body.password,
//                 personal: {
//                     birthdate: req.body.birthdate,
//                     patronym: req.body.patronym,
//                     mothers_name: req.body.mothers_name,
//                     gender: req.body.gender,
//                     birth_country: req.body.birth_country,
//                     birth_city: req.body.birth_city,
//                     residence_country: req.body.residence_country,
//                     res_addr: req.body.res_addr,
//                     tk: req.body.tk,
//                     afm: req.body.afm
//                 }
//             }
//         }
//     );
//     // console.log(req.params.id);
//     // console.log(u);
//     res.send(u);
//     // res.status(201).send();
// })



// // Update User Contact Info
// router.post('/update/', async(req, res) => {
//     console.log("skata");
//     const users = await loadAllUsers();
//     const u = await users.updateOne(
//         {"_id": mongodb.ObjectID(req.body.id)},
//         {
//             $set: {
//                 contact: {
//                     mail: req.body.mail,
//                     tel: req.body.tel
//                 }
//             }
//         }
//     );
//     console.log(req.params.id);
//     console.log(u);
//     // res.send(u);
//     res.status(201).send();
// })

async function loadAllApplications() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://team15:doatapeam1@cluster0.mweve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Cluster0').collection('applications');
}

module.exports = router;