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
app.use(methodOverride('_method'));


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

//Displays the individual blog
app.get('/blogs/:_id',blogController.showBlog)

//Redirects the blog to the edit template
app.get('/blogs/:id/edit', blogController.editBlog)

app.put('/blogs/:id', blogController.updateBlog)

app.delete('/blogs/:id', blogController.deleteBlog)

app.listen(3000, ()=> {
    console.log('Listening');
})

