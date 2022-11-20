const authmiddleware = (req, res, next) => {
  const userID = req.headers.userid;
  if (userID) {

    req.userID = userID;
    next();
  } else {
    res.status(401).send("user not found");
  }
};
module.exports = authmiddleware;
