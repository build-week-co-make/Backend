const express = require("express");
const bcrypt = require("bcryptjs");

const Users = require("./users-model");
const restricted = require("../middleware/restricted");

const router = express.Router();

//GET all users for Co-Make

router.get("/", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//GET request users profile

router.get("/:id", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//GET request  list of issues created by this user

router.get("/:id/my-issues", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//GET request for main feed of logged in users' issues

router.get("/:id/issues", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//UPDATE user

// router.put("/:id/update", restricted, checkRoles("Admin"), (req, res) => {
//   Users.update(req.params.id, req.body)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(error => {
//       res
//         .status(500)
//         .json({ message: "We ran into an error updating the user" });
//     });
// });

//DELETE a user

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
