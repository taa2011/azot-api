// Update with your config settings.
const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');


module.exports = {

  development: {
    client: 'mysql',
    connection: 'mysql://root:@localhost:3306/azot_api',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  test: {
    client: 'mysql',
    connection: 'mysql://root:@localhost:3306/azot_api_test',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  

};
