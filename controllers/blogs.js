const Blog = require('../models/blogs.js');

const index = async (req, res)=> {
    const blogs = await Blog.find();
    res.render('blogs/index.ejs', {blogs});
}

const newBlog = async (req, res) => {
    res.render('blogs/create.ejs');
}
const createBlog = async (req, res)=> {
    await Blog.create(req.body);
    res.redirect('/blogs');
}

const editBlog = async (req, res) => {
    // res.render('blogs/update.ejs');
}
const updateBlog = async ()=> {
    
}
const deleteBlog = async ()=> {
    
}

module.exports = {
    index,
    newBlog,
    createBlog,
    updateBlog,
    editBlog,
    deleteBlog
}