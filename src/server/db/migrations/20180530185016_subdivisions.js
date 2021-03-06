exports.up = (knex, Promise) => {
  return knex.schema.createTable('subdivisions', (table) => {
    table.increments();
    table.string('guid',36).notNullable().unique();
    table.string('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('subdivisions');

};
