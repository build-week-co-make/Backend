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
          description: "theres a pot hole between first and second avenue",
          location: 94107,
          category: "street/roadwork"
        },
        {
          user_id: 2,
          issue_name: "garbage on the beach",
          description:
            "the beach needs to be cleaned. There is a bunch of plastic bottles and bags/wrappers that has washed up on shore",
          location: 94107,
          category: "environment"
        },
        {
          user_id: 3,
          issue_name: "Broken fence",
          description:
            "Drunk driver crashed through the fence near the school. 15 feet of it needs to be rebuilt.",
          location: 94107,
          category: "construction"
        },
        {
          user_id: 3,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment"
        },
        {
          user_id: 1,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment"
        },
        {
          user_id: 1,
          issue_name: "pot hole",
          description: "use migrations and create a database",
          location: 94107,
          category: "environment"
        }
      ]);
    });
};
