const knex = require('../connection');

function getAllRisks() {
  return knex('risks')
  .select('*');
}

module.exports = {
  getAllRisks
};