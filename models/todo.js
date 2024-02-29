// import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
})

const blog = mongoose.model('blog', blogSchema)
module.exports = blog