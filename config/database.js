const mongoose = require('mongoose');

const connect = async() => {
    mongoose.connect(process.env.DATABASE_URL);
}