const express = require('express');
const app = express();
const morgan = require('morgan');
const router = express.Router();
const { Page, User } = require('../models');

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies


const { addPage } = require('../views'); 


router.get('/', (req, res, next) => {
    res.redirect('/wiki'); 
})


router.post('/', async (req, res, next) => {
    const page = new Page(req.body);
    try {
        await page.save();
        res.redirect('/');
    } catch(error) { next(error)}
})
 

router.get('/add', (req, res, next) => {
    res.send(addPage());
}) 





















console.log('wiki.js'); console.log('index.js'); // TESTS IF THIS FILE IS ACCESSED



module.exports = router;