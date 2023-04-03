const config = require('../../knexfile');
const knex = require('knex')(config[process.env.NODE_ENV || 'developmeent']);
const bookshelf = require('bookshelf')(knex)

const latest = async() => {
  await knex.migrate.latest();
  console.log('[knex] latest');
};

module.exports = {
  knex,
  bookshelf,
  latest
};