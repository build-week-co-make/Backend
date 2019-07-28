const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const Users = require("../auth/users-model");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  //verify the token
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Not a verified user" });
      } else {
        req.jwtToken = decodedToken;
        //anything running after this middleware can now use this req.jwtToken
        next();
      }
    });
  } else {
    res.status(400).json({ message: "no token provided" });
  }
};
