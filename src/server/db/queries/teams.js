const knex = require('../connection');

function getSingleTeamItem(id) {
  return knex('teams')
    .select('*')
    .where({ id: parseInt(id) });
}

function getTeamByProject(id) {
  return knex('teams')
    .select('teams.id','teams.project_id','teams.staff_guid',
    'teams.manually','staff.name','teams.staff_manual')
    .leftJoin('staff', function () {
      this.on('teams.staff_guid', '=', 'staff.guid')
    })
    
    .where({ project_id: parseInt(id) });
}

function getAllTeams() {
  return knex('teams')
  .select('*');
}


function addTeam(team) {
  if (
    'project_id',
    'manually',
    'staff_guid',
    'staff_manual'
    in team
  ) {
    const a = knex('teams')
      .insert(team)
      .returning('*');

    
    return a;

  } else return '';
}

function deleteTeamItem(id) {
  return knex('teams')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}


module.exports = {
  getSingleTeamItem,
  getTeamByProject,
  getAllTeams,
  addTeam,
  deleteTeamItem
};


