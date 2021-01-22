const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.status(200).json('hello world 2')
})

app.listen(80);