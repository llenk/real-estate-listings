const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});