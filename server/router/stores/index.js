var express = require('express');
var router = express.Router();

router.use('/feature', require('./feature'));

module.exports = router;
