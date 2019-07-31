const express = require("express");

const Upvotes = require("./upvotes-model");
const restricted = require("../middleware/restricted");
const validateIssueUpvote = require("../middleware/validate-issue-upvote");
const validateCommentUpvote = require("../middleware/validate-comment-upvote");

const router = express.Router();

//Post and upvote to an Issue

router.post("/issue", restricted, validateIssueUpvote, async (req, res) => {
  console.log("req.jwtToken", req.jwtToken);
  const vote = req.body;
  try {
    const upvote = await Upvotes.upvoteIssue(vote);
    res.status(201).json(upvote);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Post and upvote to a comment
router.post("/comment", restricted, validateCommentUpvote, async (req, res) => {
  console.log("req.jwtToken", req.jwtToken);
  const vote = req.body;
  try {
    const upvote = await Upvotes.upvoteComment(vote);
    res.status(201).json(upvote);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//DELETE upvote on issue

router.delete("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUpvote = await Upvotes.removeIssueUpvote(id);
    console.log(deleteUpvote);
    if (deleteUpvote > 0) {
      res.status(200).json({ message: "The Upvote has been deleted" });
    } else {
      res
        .status(404)
        .json({ message: "Unable to delete the Upvote with that id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error trying to delete Upvote" });
  }
});

//DELETE upvote on comment

router.delete("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUpvote = await Upvotes.removeCommentUpvote(id);
    console.log(deleteUpvote);
    if (deleteUpvote > 0) {
      res.status(200).json({ message: "The Upvote has been deleted" });
    } else {
      res
        .status(404)
        .json({ message: "Unable to delete the Upvote with that id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error trying to delete Upvote" });
  }
});

module.exports = router;
