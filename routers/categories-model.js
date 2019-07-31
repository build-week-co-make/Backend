const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  remove,
  update
};

function find() {
  return db("categories");
}

function findBy(filter) {
  return db("categories").where(filter);
}

function add(comment) {
  return db("categories")
    .insert(comment, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function remove(id) {
  return db("categories")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("categories")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}
