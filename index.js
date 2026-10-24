const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const path = require('path')
const app = express();
const Port = process.env.PORT || 3000
const staticRoute = require('./routes/staticRoutes.js')
const urlRouter = require('./routes/url.js')
const userRouter = require('./routes/user.js')
const data = require('./configs/MOCK_DATA.json')
// const {dbConnection} = require('./configs/db.config.js')

// dbConnection();c

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

// Middleware
app.use(express.json()); // handle json data coming from request
app.use(express.urlencoded({ extended: false })); // handle json url coming from req

app.use('/URL',urlRouter);
app.use('/user',userRouter)
app.use('/',staticRoute)

app.get('/test',(req,res)=>{
    // const user = data.find((user)=>user)
    return res.render('home',{
        allUser:data
    })
})

app.get('/register',(req,res)=>{
    return res.render('user')
})


app.listen(Port , ()=>{
    console.log(`Server is running on port ${Port}`);
})