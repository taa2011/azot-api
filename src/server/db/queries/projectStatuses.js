const knex = require('../connection');

function getAllProjectStatuses() {
  return knex('project_statuses')
  .select('*');
}

module.exports = {
  getAllProjectStatuses
};