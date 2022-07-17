//? 2. CREATE ROUTER FILE AND CREATE GET AND POST REQS
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//! GET
router.get('/', (req, res) => {
    pool.query('SELECT * from "feedback";')
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('GET error in form.router.js', error);
            res.sendStatus(500);
        });
});

//! POST
router.post('/', (req, res) => {
    //const
    const newForm = req.body;
    const sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;

    console.log(`New form is:`, newForm);

    //pool.query
    //) turnsstrings into integers
    pool.query(sqlQuery, [
        Number(newForm.feeling),
        Number(newForm.understanding),
        Number(newForm.support),
        newForm.comments,
    ])
        .then((result) => {
            console.log(`POST Success!`, result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`ERR in POST form.router.jsx`, err);
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;
