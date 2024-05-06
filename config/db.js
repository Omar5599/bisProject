const mongoose = require('mongoose');


const url = 'mongodb+srv://oshabaan783:dggeBplI0YOlSw7E@bisproject.lt63c1w.mongodb.net/?retryWrites=true&w=majority&appName=bisProject';

const connectDb = () => {
    mongoose.connect(url)
        .then(() => {
            console.log('Connected succesfully to server')
        });
}

module.exports = connectDb;