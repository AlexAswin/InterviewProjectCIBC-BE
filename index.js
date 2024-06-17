const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3200;

app.use(express.json());

app.use(( req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-HEADERS', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send("Node server Started")
})

const transactionsRoutes = require('./Routes/transactions');
app.use('/transactions', transactionsRoutes);

//connecting to mongoose Cloud Atlas

mongoose.connect('mongodb+srv://alexalexaswin95:mongoDB9585@cluster0.kilzd0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( result => {
    app.listen(PORT);
    console.log('Server Started')
})
.catch(error => {
    console.log(error);
});