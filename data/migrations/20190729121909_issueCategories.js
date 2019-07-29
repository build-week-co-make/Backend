exports.up = function(knex) {
  return knex.schema.createTable("issueCategories", cat => {
    cat.increments();

    cat
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    cat
      .integer("issue_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("issues")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    cat.unique(["category_id", "issue_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("issueCategories");
};
