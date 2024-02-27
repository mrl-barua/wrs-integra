const express = require('express');
const app = express();
const port = 3000;

// A simple route
app.get('/', (req, res) => {
    res.send('Hello from Express.js!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
