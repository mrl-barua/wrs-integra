const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

// A simple route
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM users';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('Check console for results');
    });
});

app.get('/about', (req, res) => {
    res.send('About us');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});