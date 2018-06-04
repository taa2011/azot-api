const knex = require('../connection');

function getAllStaff() {
  return knex('staff')
  .select('*');
}

module.exports = {
  getAllStaff
};