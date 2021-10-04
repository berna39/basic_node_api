const express = require('express');
var app = express();
const dotnev = require('dotenv');
const port = process.env.PORT || 5000
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const mongoose = require('mongoose');
const cors = require('cors');

// config
dotnev.config();


app.use(express.json());
app.use(cors());

// middleware [routes]
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);


mongoose.connect('mongodb+srv://root:somethingsecret@cluster0.lrljs.mongodb.net/myapp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } , (error) => { 
    if(error){console.log(error); }
    else { console.log('db connected'); }
 });


app.listen(port, (err) => {
    console.log("up and running");
});
