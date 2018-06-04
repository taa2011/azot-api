
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('staff').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        {guid: '5780ce36-5319-4e9d-8c64-0354793d1659',name:'Киприянов Вацлав Феоктистович'},
        {guid: '05695d14-ca88-4e9a-ab23-2c81e75bbb9f',name:'Ерохина Любава Ивановна'},
        {guid: 'b514faa9-d41b-4185-a12c-63ce35ea26d6',name:'Махмудов Гаврила Трофимович'},
        {guid: '0dd1d883-79bb-4df0-a556-f3889feb3ea6',name:'Кидирбаева Яна Святославовна'},
        {guid: 'fb5707fa-3735-453b-8d29-a5e5c2191d56',name:'Валюхова Алиса Емельяновна'},
      ]);
    });
};
