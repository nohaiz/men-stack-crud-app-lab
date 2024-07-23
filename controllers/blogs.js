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

const showBlog = async (req, res) => {
    const blogDetails = await Blog.findById(req.params);
    res.render('blogs/show.ejs', {blogDetails});
}

const editBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.render('blogs/update.ejs', {blog});
}
const updateBlog = async (req, res)=> {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/blogs/${req.params.id}`);
}
const deleteBlog = async ()=> {
    
}

module.exports = {
    index,
    newBlog,
    createBlog,
    showBlog,
    updateBlog,
    editBlog,
    deleteBlog
}