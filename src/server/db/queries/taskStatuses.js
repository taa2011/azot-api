const knex = require('../connection');

function getAllTaskStatuses() {
  return knex('task_statuses')
  .select('*');
}

module.exports = {
  getAllTaskStatuses
};