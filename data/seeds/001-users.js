exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { username: "Bob", password: "pw" },
        { username: "Dave", password: "pass" },
        { username: "Anne", password: "pw123" }
      ]);
    });
};
