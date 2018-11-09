const express = require('express');
const app = express();
const morgan = require('morgan');
module.exports = app; // this line is only used to make testing easier.


const Sequelize = require('sequelize');
const db = new Sequelize('wikistack','postgres','postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = {
  db
}
