const knex = require('../connection');

function getAllSubdivisions() {
  return knex('subdivisions')
  .select('*');
}

module.exports = {
  getAllSubdivisions
};