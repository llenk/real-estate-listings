const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.get('/properties', function(req, res) {
    pool.query(`SELECT * FROM "properties"
        WHERE "type" LIKE $1`, [req.query.type])
    .then(function(response) {
        res.send(response);
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(500);
    });
});

app.post('/properties', function(req, res) {
    let prop = req.body;
    pool.query(`INSERT INTO "properties" 
        ("cost", "sqft", "type", "city", "image_path")
        VALUES ($1, $2, $3, $4, $5)`, 
        [prop.cost, prop.sqft, prop.type, prop.city, prop.image_path])
    .then(function(response) {
        res.send(200);
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(500);
    });
});

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});