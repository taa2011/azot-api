exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('main_customer',36).notNullable();
    table.string('project_manager',36).notNullable();
    table.integer('is_internal_performer').notNullable().unsigned();
    table.string('internal_performer',36).notNullable();
    table.string('external_performer',36).notNullable();
    table.string('effect').notNullable();
    table.date('date_begin').notNullable();
    table.date('date_end').notNullable();
    table.date('date_fact_end');
    table.integer('total_cost').notNullable().unsigned();
    table.integer('project_status').notNullable().unsigned();

  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects');

};
