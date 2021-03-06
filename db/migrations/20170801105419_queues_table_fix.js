exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('profiles', t => {
      t.integer('queue_view').nullable();
    }),
    knex.schema.table('queues', function(table) {
      table.string('name', 100).nullable();
      table.string('address', 100).nullable();
      table.string('city', 100).nullable();
      table.string('state', 100).nullable();
      table.string('image_url', 200).nullable();
      table.string('phone', 100).nullable();
    })
  ]);
};
exports.down = function(knex, Promise) {
  return Promise.all([]);
};
