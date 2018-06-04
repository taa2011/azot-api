exports.up = (knex, Promise) => {
  return knex.schema.createTable('task_statuses', (table) => {
    table.increments();
    table.string('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('task_statuses');

};
