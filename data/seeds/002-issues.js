exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("issues")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("issues").insert([
        {
          user_id: 1,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment",
          upvotes: 0
        },
        {
          user_id: 2,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment",
          upvotes: 0
        },
        {
          user_id: 3,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment",
          upvotes: 0
        },
        {
          user_id: 3,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment",
          upvotes: 0
        },
        {
          user_id: 1,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment",
          upvotes: 0
        },
        {
          user_id: 1,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment",
          upvotes: 0
        }
      ]);
    });
};
