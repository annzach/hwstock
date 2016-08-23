const express = require('express');
const router = express.Router();
const axios = require('axios');


router.use('/search',require('./search'));


module.exports = router;
