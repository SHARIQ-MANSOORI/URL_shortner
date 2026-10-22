const express = require('express');
const app = express();
const Port = process.env.PORT || 3000
const urlRouter = require('./routes/url.js')

app.use('/URL',urlRouter)


app.listen(Port , ()=>{
    console.log(`Server is running on port ${Port}`);
})