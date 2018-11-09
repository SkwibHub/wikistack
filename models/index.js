const express = require('express');
const app = express();
const morgan = require('morgan');
const router = express.Router();
module.exports = app; // this line is only used to make testing easier.


const Sequelize = require('sequelize');
const db = new Sequelize('wikistack', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

const User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
})

const Page = db.define('page', {
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN,
})

module.exports = {
    db,
    router,
    Page,
    User
}