require('dotenv').config();
const express = require('express');
const db = require('mongoose');
const router = require('./routes/router');
const app = express();
const port = process.env.PORT || 8080;
const connectDB = require('./controller/db');

app.use(express.json());

app.use('/api/v1/user', router);

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