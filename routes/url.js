const express = require('express')
const router = express.Router();
const {handleCreateUrl} = require('../controllers/url.js')

router.post('/',handleCreateUrl)


module.exports = router;