const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('hello world');
});

const start = () => {
    app.listen(port, () => {
        console.log(`server runnign on port: %{port}`);
    })
};


start();