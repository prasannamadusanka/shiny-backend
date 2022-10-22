const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    console.log("came to auth")
    // get token from request header
    const token = req.header("auth-token");
    console.log(token)

    // if token is null then, server will send error message with  401 unauthorized status code
    if (!token) return res.status(401).json({
        message: "Access Denied!"
    })

    try {
        // if there is token ,then try to verify the token. if token is not valid then this function return exception
        const verified = jwt.verify(token, "ucscucscucsc");

        //if token is valid , then middleware pass request to next
        next();
    } catch (error) {
        console.log("error")

        res.status(400).json({
            message: "Invalid Token!"
        })
    }
}