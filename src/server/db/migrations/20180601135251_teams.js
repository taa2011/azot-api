exports.up = (knex, Promise) => {
  return knex.schema.createTable('teams', (table) => {
    table.increments();
    table.integer('project_id').notNullable().unsigned();
    table.integer('manually').notNullable().unsigned();
    table.string('staff_guid',36);
    table.string('staff_manual');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('teams');

};
