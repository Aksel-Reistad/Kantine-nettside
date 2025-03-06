const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');  //Importer CORS

const app = express();
app.use(cors());  //Aktiver CORS
app.use(express.static(__dirname));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb',
    port: 3307
});
// Koble til databasen
db.connect((err) => {  
    if (err) {
        console.error('Feil ved tilkobling til databasen:', err.message);
    }
    console.log('Koblet til databasen');
});

module.exports = db;