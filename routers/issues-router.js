const express = require("express");
const bcrypt = require("bcryptjs");

const Issues = require("./issues-model");
const restricted = require("../middleware/restricted");

const router = express.Router();

//GET request  list of issues created by this user

router.get("/", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);
  Issues.find()
    .then(issues => {
      res.json(issues);
    })
    .catch(err => res.send(err));
});

//GET request for main feed of logged in Issues' issues

router.get("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  console.log("req.jwtToken", req.jwtToken);
  try {
    const getIssue = await Issues.findById(id);
    if (getIssue) {
      res.status(200).json(getIssue);
    } else {
      res.status(404).json({ message: "wrong user info" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "We ran into an error retrieving the user" });
  }
});

//ADD an Issue

router.post("/", restricted, async (req, res) => {
  console.log("req.jwtToken", req.jwtToken);
  const issue = req.body;
  try {
    const newIssue = Issues.add(issue);
    res.status(201).json(newIssue);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
  // Users.add(user)
  //   .then(saved => {
  //     res.status(201).json(saved);
  //   })
  //   .catch(error => {
  //     res.status(500).json(error);
  //   });
});

//UPDATE an issue

router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  console.log(id);

  Users.update(id, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error updating the user" });
    });
});

//DELETE an issue

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProject = await ProjectDb.remove(id);
    console.log(deleteProject);

    if (deleteProject > 0) {
      res.status(200).json({ message: "The project has been deleted" });
    } else {
      res
        .status(404)
        .json({ message: "Unable to delete the project with that id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error trying to delete project" });
  }
});

module.exports = router;
