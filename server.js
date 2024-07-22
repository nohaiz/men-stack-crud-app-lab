//Import modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

//Database connection
require('./config/database.js');

//Model 
require('./models/blogs.js');

//Controller
const blogController = require('./controllers/blogs.js');

//Middleware

const app = express();
app.use(morgan('dev'));

//Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
})

//This wont work cause i dont have index ready yet
app.get('/blogs',blogController.index)

app.get('/blogs/create',blogController.newBlog)


app.listen(3000, ()=> {
    console.log('Listening');
})

