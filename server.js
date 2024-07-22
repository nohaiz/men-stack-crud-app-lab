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
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
})

//Displays the entire list of resources
app.get('/blogs',blogController.index)

//Redirects the user to the create form
app.get('/blogs/new', blogController.newBlog)

//After form submission the data is posted to the database
app.post('/blogs',blogController.createBlog)

app.listen(3000, ()=> {
    console.log('Listening');
})

