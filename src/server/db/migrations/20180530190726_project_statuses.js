exports.up = (knex, Promise) => {
  return knex.schema.createTable('project_statuses', (table) => {
    table.increments();
    table.string('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('project_statuses');

};
