const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./models');
module.exports = app; // this line is only used to make testing easier.


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(morgan('dev'));

app.use(express.static(__dirname + '/views'));

// app.use("/", require('./views/index'));

app.get('/', (req, res) => {
    res.send('Test 2');
})


//----------------------------------

db.authenticate().
then(() => {
  console.log('connected to the database');
}) // ISSUES HERE BECAUSE OF SEQUELIZE PASSWORD ERROR, OTHERWISE IT CONNECTS THRU PORT 3000


const PORT = 3000;
app.listen (PORT, () => {
    console.log(`App listenin in port ${PORT}`);
})




