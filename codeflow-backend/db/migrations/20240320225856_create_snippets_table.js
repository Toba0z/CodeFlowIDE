/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('snippets', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('code').notNullable();
        table.timestamps(true, true);
      });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('snippets');
};
