const express = require("express");
const bcrypt = require("bcryptjs");

const Comments = require("./comments-model");
const restricted = require("../middleware/restricted");

const router = express.Router();

router.post("/", restricted, async (req, res) => {
  const commentInfo = req.body;
  try {
    const addComment = await Comments.add(commentInfo);
    res.status(201).json(addComment);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
});

router.get("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  console.log("req.jwtToken", req.jwtToken);
  try {
    const getComment = await Comments.findById(id);
    if (getComment) {
      res.status(200).json(getComment);
    } else {
      res.status(404).json({ message: "comment with that id does not exist" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "We ran into an error retrieving the comment" });
  }
});

module.exports = router;
