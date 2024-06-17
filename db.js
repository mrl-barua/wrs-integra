const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'integra'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        process.exit(1); // Exit the process with a failure code
    }
    console.log('Connected to database');
});

module.exports = db;