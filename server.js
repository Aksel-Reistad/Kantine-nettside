const express = require('express');
const path = require('path');
const db = require('./Kobling.js');  
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serverer index.html

app.post('/run-query', (req, res) => {
    const query = req.body.query;
    console.log('Mottatt spørring:', query);

    //Sikre at query ikke er tom
    if (!query) {
        console.error('Ingen spørring mottatt')
        return res.status(400).json({ error: "Ingen spørring mottatt." });
    }

    db.query(query, (err, results) => {
        if (err) {
            console.error('SQL-feil:', err.message);  // Logg feilen
            return res.status(400).json({ error: "Feil i spørring." });
        }
        res.json({ results });
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
