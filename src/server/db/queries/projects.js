const knex = require('../connection');

function getAllProjects() {
  return knex('projects')
    .select('*');
}

function getAllProjectsForList() {

  const a = knex.select(
    'projects.id',
    'projects.name',
    'subdivisions.name as main_customer_text',
    'staff.name as project_manager_text',
    knex.raw('(CASE projects.is_internal_performer WHEN 0 THEN ep.name WHEN 1 THEN ip.name ELSE \'ошибка\' END) as performer'),
    'projects.date_begin',
    'projects.date_end',
    'projects.date_fact_end',
    'projects.total_cost',
    'ps.name as project_status',



  ).from('projects').leftJoin('subdivisions', function () {
    this.on('projects.main_customer', '=', 'subdivisions.guid')
  }).leftJoin('staff', function () {
    this.on('projects.project_manager', '=', 'staff.guid')
  }).leftJoin('subdivisions as ip', function () {
    this.on('projects.internal_performer', '=', 'ip.guid')
  }).leftJoin('contractors as ep', function () {
    this.on('projects.external_performer', '=', 'ep.guid')
  }).leftJoin('project_statuses as ps', function () {
    this.on('projects.project_status', '=', 'ps.id')
  });
  
  return a;
}

function getSingleProject(id) {
  return knex('projects')
    .select('*')
    .where({ id: parseInt(id) });
}

function addProject(project) {
  if (
    'name',
    'main_customer',
    'project_manager',
    'is_internal_performer',
    'internal_performer',
    'external_performer',
    'effect',
    'date_begin',
    'date_end',
    'total_cost',
    'project_status' 
    in project
  ) {
    const a = knex('projects')
      .insert(project)
      .returning('*');

    
    return a;

  } else return '';
}

function updateProject(id, project) {
  const a = knex('projects')
  .update(project)
  .where({ id: parseInt(id) })
  .returning('*')
  return a;
  

}


module.exports = {
  getAllProjects,
  getAllProjectsForList,
  getSingleProject,
  addProject,
  updateProject
};


// CASE projects.is_internal_performer
//   WHEN '0' THEN 'внешний'
//   WHEN '1' THEN 'внутренний'
//  ELSE 'ошибка'
//  END as performer,