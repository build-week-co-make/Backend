const db = require("../data/db-config");

module.exports = {
  upvoteIssue,
  upvoteComment,
  find,
  issueVoteById,
  commentVoteById,
  removeIssueUpvote,
  removeCommentUpvote
};

function find() {
  return db("comments");
}

//Add an upvote to an issue
function upvoteIssue(upvote) {
  return db("issueUpvotes")
    .insert(upvote, "id")
    .then(ids => {
      const [id] = ids;
      return issueVoteById(id);
    });
}

//Add an upvote to an comment
function upvoteComment(upvote) {
  return db("commentUpvotes")
    .insert(upvote, "id")
    .then(ids => {
      const [id] = ids;
      return commentVoteById(id);
    });
}

function issueVoteById(id) {
  return db("issueUpvotes")
    .where({ id })
    .first();
}

function commentVoteById(id) {
  return db("commentUpvotes")
    .where({ id })
    .first();
}

function removeIssueUpvote(id) {
  return db("comments")
    .where({ id })
    .del();
}

function removeCommentUpvote(id) {
  return db("comments")
    .where({ id })
    .del();
}
