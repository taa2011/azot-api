
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {
          project_id:1,
          staff_guid:'0dd1d883-79bb-4df0-a556-f3889feb3ea6',
          manually:0,
          staff_manual:''
        },
        {
          project_id:1,
          staff_guid:'fb5707fa-3735-453b-8d29-a5e5c2191d56',
          manually:0,
          staff_manual:''
        },
        {
          project_id:1,
          staff_guid:null,
          manually:1,
          staff_manual:'Иванов Евгений Игоревич'
        },
        
      ]);
    });
};
