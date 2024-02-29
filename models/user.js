// import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    registeredAt: { type: Date, default: new Date() },
    updatedBy: String,
    updatedAt: Date,


})

const user = mongoose.model('user', userSchema)
module.exports = user