/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('execution_states', function(table) {
        table.increments('id').primary();
        table.integer('snippet_id').unsigned().references('snippets.id');
        table.integer('line_number').notNullable();
        table.string('state', 2048); // For simplicity, storing execution state as a string
        table.integer('order').notNullable(); // Order of execution
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('execution_states');
};
