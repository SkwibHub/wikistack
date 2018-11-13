const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./models');
const wikiModels = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
db.sync({force: true});
module.exports = app; // this line is only used to make testing easier.


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(morgan('dev'));

app.use(express.static(__dirname + '/views'));
 
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res, next) => {
    res.redirect('/wiki'); 
});


//----------------------------------

db.authenticate().
then(() => {
  console.log('connected to the database');
}) // ISSUES HERE BECAUSE OF SEQUELIZE PASSWORD ERROR, OTHERWISE IT CONNECTS THRU PORT 3000


const PORT = 3000;

const init = async() => {
    await wikiModels.db.sync();
    
    app.listen (PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();




