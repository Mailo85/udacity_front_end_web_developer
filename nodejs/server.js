projectData = {};

const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});

app.get('/test', (req, res) => {
    res.send('Hallo Test');
});

app.get('/test/test', (req, res) => {
    res.send('Hallo Test Test');
});

const data = [];

app.post('/addMovie', addMovie);

function addMovie(req, res) {
    data.push(req.body);
    console.log(data);
}
