exports.up = function(knex) {
  return knex.schema.createTable("issueUpvotes", upvote => {
    upvote.increments();

    upvote
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    upvote
      .integer("issue_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("issues")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("issueUpvotes");
};
