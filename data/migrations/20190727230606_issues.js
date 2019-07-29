exports.up = function(knex) {
  return knex.schema.createTable("issues", issues => {
    issues.increments();

    issues
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    issues
      .integer("zipCode")
      .notNullable()
      .comment("This is the location field");
    issues.string("issue_name", 128).notNullable();
    issues.text("description").notNullable();
    issues.string("category", 128).notNullable();
    issues.boolean("volunteer").defaultTo(false);
    issues.boolean("completed").defaultTo(false);
    issues.boolean("open_for_voting").defaultTo(true);
    issues.string("picture", 256);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("issues");
};
