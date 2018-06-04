
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          // parent_id:'',
          name: 'задача 1 проекта №1',
          date_begin: '2018-05-15',
          date_end: '2018-05-19',
          responsible_in_staff:'1',
          staff_responsible:'5780ce36-5319-4e9d-8c64-0354793d1659',
          contractors_responsible:'',
          task_status: 1,
          risk: 2,
          risk_comment:'asadsadsad',
          // date_fact_end: '2018-05-20'
        },
        {
          project_id: 1,
          // parent_id:'',
          name: 'задача 2 проекта №1',
          date_begin: '2018-05-19',
          date_end: '2018-05-21',
          responsible_in_staff:'0',
          staff_responsible:'',
          contractors_responsible:'18ceb39c-089a-459d-a611-2dadc8c9d044',
          task_status: 2,
          risk: 3,
          risk_comment:'xzczxc asadsadsad',
          // date_fact_end: '2018-05-20'
        },
        {
          project_id: 1,
          // parent_id:'',
          name: 'задача 3 проекта №1',
          date_begin: '2018-05-22',
          date_end: '2018-05-27',
          responsible_in_staff:'1',
          staff_responsible:'5780ce36-5319-4e9d-8c64-0354793d1659',
          contractors_responsible:'',
          task_status: 1,
          risk: 2,
          risk_comment:'aaaa sadsadsad',
          // date_fact_end: '2018-05-20'
        },
        
        
      ]);
    });
};
