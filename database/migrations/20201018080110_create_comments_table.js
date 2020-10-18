exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(table) {
      table.increments();
      table.string('comment', 200).notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
  }