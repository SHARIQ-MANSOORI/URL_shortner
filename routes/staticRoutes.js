const express = require('express');
const router = express.Router();
const path = require('path')




router.get('/signup',(req,res)=>{
    return res.render('user')
})



module.exports = router;