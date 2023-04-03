const dotenv = require('dotenv');

dotenv.config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.POSTGRES_CONNECTION || "postgresql://dev:dev@localhost:5432/dev"
  },

  production: {
    client: 'pg',
    connection: process.env.POSTGRES_CONNECTION || "postgresql://dev:dev@localhost:5432/dev"
  }

};
