//Import modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

//Database connection
require('./config/database.js');

//Model 

//Middleware

const app = express();
app.use(morgan('dev'));

//Routes

app.listen(3000, ()=> {
    console.log('Listening');
})

