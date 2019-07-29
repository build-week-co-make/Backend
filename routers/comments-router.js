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

module.exports = router;
