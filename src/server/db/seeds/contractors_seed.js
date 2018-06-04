
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contractors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contractors').insert([
        {guid: '03d95444-68e5-4f16-a898-1c6c300cf645',name:'Клуб ньюс ленд \'фит гуру\''},
        {guid: 'a88d9e81-14fe-4f5f-9815-cbe440611a7a',name:'ООО \'Випонлайн\''},
        {guid: '59a8cabc-8f2d-4bf8-8ea9-cd8ec17a207c',name:'ЗАО \'микро\''},
        {guid: '18ceb39c-089a-459d-a611-2dadc8c9d044',name:'випдирект'},
        {guid: '06f5a1f6-afc2-4e6e-a588-46922799ad52',name:'люксклуб ньюс'},
      ]);
    });
};
