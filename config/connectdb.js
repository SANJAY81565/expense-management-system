const mongoose = require('mongoose')

const connectDb =() =>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongo');
    } catch (error) {
        console.log(error, "error in connection", mongoose.connection.host);
    }
}
module.exports = connectDb