const mongoose = require('mongoose');

const connectDB = (uri)=> {
    try {
        return mongoose.connect(uri)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB