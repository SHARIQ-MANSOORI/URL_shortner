const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const path = require('path')
const app = express();
const Port = process.env.PORT || 3000
const urlRouter = require('./routes/url.js')
const data = require('./configs/MOCK_DATA.json')
// const {dbConnection} = require('./configs/db.config.js')

// dbConnection();c

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/URL',urlRouter)

app.get('/test',(req,res)=>{
    // const user = data.find((user)=>user)
    return res.render('home',{
        allUser:data
    })
})


app.listen(Port , ()=>{
    console.log(`Server is running on port ${Port}`);
})