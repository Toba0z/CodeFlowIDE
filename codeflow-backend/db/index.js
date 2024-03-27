const knex = require('knex');
const knexFile = require('../knexfile.js');

const deb = knex(knexFile.development);

module.exports = db;