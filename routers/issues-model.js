const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("issues");
}

function findBy(filter) {
  return db("issues").where(filter);
}

function add(issue) {
  return db("issues")
    .insert(issue, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("issues")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("users")
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

//get issue with comments attatched
// async function getProjectWithActions(id) {
//     let project = await getProjectById(id);
//     let actions = await getActionsByProjId(id);
//     if (project) {
//       return { ...project, actions };
//     } else {
//       return null;
//     }
//   }
