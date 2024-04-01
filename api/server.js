const express = require('express');
const app = express();
const port = 5000;



app.get('/orders', (req, res) => {
    res.send('all-orders');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });