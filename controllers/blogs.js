const Blog = require('../models/blogs.js');

const index = async (req, res)=> {
    res.render('blogs/index.ejs');
}
const newBlog = async (req, res)=> {
    res.render('blogs/create.ejs');
}
const updateBlog = async ()=> {
    
}
const deleteBlog = async ()=> {
    
}

module.exports = {
    index,
    newBlog,
    updateBlog,
    deleteBlog
}