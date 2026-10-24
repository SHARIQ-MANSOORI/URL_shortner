const express = require('express');
const router = express.Router();
const {handleUserRegister} = require('../controllers/user')


// register

router.post('/',handleUserRegister)



module.exports = router;