
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'проект №1',
          main_customer: 'af7a8525-ae39-4862-830c-030bacf25e44',
          project_manager:'5780ce36-5319-4e9d-8c64-0354793d1659',
          is_internal_performer:'1',
          internal_performer:'1ab5bab8-b0f8-46bd-b373-cc8ae43e038c',
          external_performer:'',
          effect:'fdgfdgd dfgfdg',
          date_begin: '2018-05-13',
          date_end: '2018-12-14',
          date_fact_end : null,
          total_cost: 123,
          project_status: 1
        },
        {
          name: 'проект №2',
          main_customer: 'af7a8525-ae39-4862-830c-030bacf25e44',
          project_manager:'05695d14-ca88-4e9a-ab23-2c81e75bbb9f',
          is_internal_performer:'0',
          internal_performer:'',
          external_performer:'59a8cabc-8f2d-4bf8-8ea9-cd8ec17a207c',
          effect:'fdgfdgd dfgfdg 123',
          date_begin: '2018-05-18',
          date_end: '2018-11-25',
          date_fact_end : null,
          total_cost: 1234,
          project_status: 1
        },
        {
          name: 'проект №3',
          main_customer: '8592ea79-e921-495a-b564-14a1a6dd9fd4',
          project_manager:'0dd1d883-79bb-4df0-a556-f3889feb3ea6',
          is_internal_performer:'1',
          internal_performer:'5c066cdd-dd36-498c-9e15-ec1a27c1145c',
          external_performer:'',
          effect:'fdgfdgd dfgfdg',
          date_begin: '2018-05-19',
          date_end: '2018-10-01',
          date_fact_end : null,
          total_cost: 2123,
          project_status: 2
        },
        
        
      ]);
    });
};
