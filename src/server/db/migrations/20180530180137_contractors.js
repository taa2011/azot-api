exports.up = (knex, Promise) => {
  return knex.schema.createTable('contractors', (table) => {
    table.increments();
    table.string('guid',36).notNullable().unique();
    table.string('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('contractors');

};
