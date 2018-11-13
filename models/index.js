const express = require('express');
const app = express();
const morgan = require('morgan');
const router = express.Router();
module.exports = app; // this line is only used to make testing easier.



const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

function generateSlug(title='title') {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

const User = db.define('user', {
    name: { type: Sequelize.STRING, allowNull: false },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }
})

const Page = db.define('page', {
    title: { type: Sequelize.STRING, allowNull: false },
    slug: { type: Sequelize.STRING, allowNull: false },
    content: { type: Sequelize.STRING, allowNull: false },
    status: {
        type: Sequelize.ENUM('open', 'closed')
      }
})

Page.beforeValidate((page) => {
    if (!page.slug) {
        page.slug = generateSlug('TEST'); 
    }
});   

console.log('index.js'); // TESTS IF THIS FILE IS ACCESSED


module.exports = {
    db,
    router,
    Page,
    User
}