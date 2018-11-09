const express = require('express');
const app = express();
const morgan = require('morgan');
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

console.log('user.js'); // TESTS IF THIS FILE IS ACCESSED
 






module.exports = router;