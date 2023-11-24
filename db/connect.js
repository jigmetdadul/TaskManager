const mongoose = require('mongoose')


const connectDB = (url)=> {
    mongoose
    .connect(url)
    .then(()=> console.log('Connected to the DB'))
    .catch(error=> console.error('Error connecting to the database:', error))
}

module.exports = connectDB