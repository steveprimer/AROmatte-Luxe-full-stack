const jwt = require("jsonwebtoken");
require("dotenv").config();

const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!token) {
    req.user = null;
    return next(); // No token — guest
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret); // match your casing
    req.user = decoded;
  } catch (err) {
    req.user = null; // Invalid token — treat as guest
  }

  return next();
};

module.exports = { optionalAuth };
