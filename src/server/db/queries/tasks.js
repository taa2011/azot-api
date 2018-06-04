const knex = require('../connection');

function getAllTasks() {
  return knex('tasks')
    .select('*');
}


function getTasksByProject(id) {

  const a = knex.select(
    'tasks.id',
    'tasks.project_id',
    'tasks.parent_id',
    'tasks.name',
    'tasks.date_begin',
    'tasks.date_end',
    knex.raw('(CASE tasks.responsible_in_staff WHEN 0 THEN contractors.name WHEN 1 THEN staff.name ELSE \'ошибка\' END) as responsible'),
    'task_statuses.name as task_status_text',
    'risks.name as risk_text',
    'tasks.risk_comment',
    'tasks.date_fact_end'
    
  ).from('tasks').leftJoin('contractors', function () {
    this.on('tasks.contractors_responsible', '=', 'contractors.guid')
  }).leftJoin('staff', function () {
    this.on('tasks.staff_responsible', '=', 'staff.guid')
  }).leftJoin('task_statuses', function () {
    this.on('tasks.task_status', '=', 'task_statuses.id')
  }).leftJoin('risks', function () {
    this.on('tasks.risk', '=', 'risks.id')
  }).where({ project_id: parseInt(id) });
  
  return a;
  
}

module.exports = {
  getAllTasks,
  getTasksByProject,
};

