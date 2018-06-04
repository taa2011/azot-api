
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('risks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('risks').insert([
        {id: 1, name: 'отсутствует'},
        {id: 2, name: 'низкий'},
        {id: 3, name: 'средний'},
        {id: 4, name: 'высокий'}
      ]);
    });
    
};
