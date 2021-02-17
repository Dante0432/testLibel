const jwt = require("jsonwebtoken");

const catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
      next();
    } catch (e) {
      res.status(404).json({
        status: "error",
        error: e.message,
      });
    }
  };
};

const verifyToken = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(403).send({
      success: false,
      codigo: 403,
      msg: "No token provided!",
    });
  }
  
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        success: false,
        codigo: 401,
        msg: "Unauthorized!",
      });
    }
  });
  next()
};

module.exports = {
  catchAsync,
  verifyToken
};
