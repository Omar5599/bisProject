const mongoose = require('mongoose');


const url = 'mongodb://127.0.0.1:27017/shoppingApplication';

const connectDb = () => {
    mongoose.connect(url)
        .then(() => {
            console.log('Connected succesfully to server')
        });
}

module.exports = connectDb;