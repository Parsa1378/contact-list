require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const connectDB = require('./controller/db');

app.get('/', (req, res) => {
    res.send('hello world');
});

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server runing on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};


start();