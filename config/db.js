const mongoose = require('mongoose');


const url = 'mongodb+srv://ahmedaltahtawy:ahmed1310ahmed@cluster0.lq6aueb.mongodb.net/?retryWrites=true&w=majority';

const connectDb = () => {
    mongoose.connect(url)
        .then(() => {
            console.log('Connected succesfully to server')
        });
}

module.exports = connectDb;