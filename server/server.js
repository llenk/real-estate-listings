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

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});