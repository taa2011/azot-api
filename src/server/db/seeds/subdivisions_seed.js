
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subdivisions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('subdivisions').insert([
        {guid: 'af7a8525-ae39-4862-830c-030bacf25e44',name:'Основное'},
        {guid: '1ab5bab8-b0f8-46bd-b373-cc8ae43e038c',name:'Второе'},
        {guid: 'c6b0ddb5-8a02-4976-afeb-72b7ae2e1c78',name:'Третье'},
        {guid: '8592ea79-e921-495a-b564-14a1a6dd9fd4',name:'Четвертое'},
        {guid: '5c066cdd-dd36-498c-9e15-ec1a27c1145c',name:'Пятое'},
      ]);
    });
};
