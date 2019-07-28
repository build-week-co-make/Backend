const express = require("express");
const bcrypt = require("bcryptjs");

const secret = require("../config/secrets");
const Users = require("../routers/users-model");
const restricted = require("../middleware/restricted");
const validateUserRegistration = require("../middleware/validate-registration");

const router = express.Router();

router.post("/register", validateUserRegistration, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved.username);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username
  };
  // const jwtSecret = process.env.JWT_SECRET || "keep it secret";
  const jwtOptions = {
    expiresIn: "1d"
  };
  return jwt.sign(jwtPayload, secret, jwtOptions);
}

module.exports = router;
