// getting-started.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// dotenv.config();
 


async function dbConnection(){
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
        
    }catch(err){
        console.log("MongoDB connection failed");
        console.log(err);
        throw err;
    }
}

module.exports = {dbConnection};