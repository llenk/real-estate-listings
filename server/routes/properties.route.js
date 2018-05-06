const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.query(`SELECT * FROM "properties"
        WHERE "type" LIKE $1;`, [req.query.type])
        .then(function (response) {
            res.send(response);
        }).catch(function (error) {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', function (req, res) {
    let prop = req.body;
    pool.query(`INSERT INTO "properties" 
        ("cost", "sqft", "type", "city", "image_path")
        VALUES ($1, $2, $3, $4, $5);`,
        [prop.cost, prop.sqft, prop.type, prop.city, prop.image_path])
        .then(function (response) {
            res.send(200);
        }).catch(function (error) {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/', function (req, res) {
    pool.query(`DELETE FROM "properties"
        WHERE "id" = $1`, [Number(req.query.prop)])
        .then(function(response) {
            res.send(200);
        }).catch(function(error) {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;