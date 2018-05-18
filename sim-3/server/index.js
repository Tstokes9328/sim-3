require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../build'));

massive(process.env.CONNECTION_STRING).then(db => {
    db.seedFile()
        .then(() => console.log('Seed Succesful'))
        .catch((error) => console.log('Seed Unsuccesful', error))

    app.set('db', db);
})

app.post('/users/new', controller.newUser)
app.post('/users/login', controller.loginUser)


app.listen(3005, () => console.log('Connected on port 3005'));