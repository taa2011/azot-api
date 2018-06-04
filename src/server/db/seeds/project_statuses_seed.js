
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project_statuses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_statuses').insert([
        {id: 1, name: 'проработка'},
        {id: 2, name: 'в работе'},
        {id: 3, name: 'завершен'}
      ]);
    });
};
