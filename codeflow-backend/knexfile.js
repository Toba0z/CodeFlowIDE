// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// backend/knexfile.js
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    }
  }
};


// PORT=8022
// DB_HOST=127.0.0.1
// DB_USER=root
// DB_PASSWORD=JahJah3322
// DB_NAME=codeflowIde