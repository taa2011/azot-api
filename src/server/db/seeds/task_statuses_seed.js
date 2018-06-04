
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task_statuses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task_statuses').insert([
        {id: 1, name: 'в работе'},
        {id: 2, name: 'завершена'},
        {id: 3, name: 'отменен'},
        {id: 4, name: 'приостановлен'}
      ]);
    });
    
};
