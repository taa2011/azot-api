const knex = require('../connection');

function getAllContractors() {
  return knex('contractors')
  .select('*');
}

module.exports = {
  getAllContractors
};