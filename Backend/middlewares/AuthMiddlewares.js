const authmiddleware = (req, res, next) => {
    console.log('req:', req.headers)
    // const userID = req.headers
    // if (userID) {
    //     req.userID = userID
    //     next()
    // }
    // else {
    //     res.status(401).send("user not found")
    // }
}
module.exports = authmiddleware