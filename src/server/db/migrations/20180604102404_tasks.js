exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.integer('project_id').notNullable().unsigned();
    table.integer('parent_id').unsigned();
    table.string('name').notNullable();
    table.date('date_begin').notNullable();
    table.date('date_end').notNullable();
    table.integer('responsible_in_staff').notNullable().unsigned();
    table.string('staff_responsible',36).notNullable();
    table.string('contractors_responsible',36).notNullable();
    table.integer('task_status').notNullable().unsigned();
    table.integer('risk').notNullable().unsigned();
    table.string('risk_comment');
    table.date('date_fact_end');

    

  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks');

};
