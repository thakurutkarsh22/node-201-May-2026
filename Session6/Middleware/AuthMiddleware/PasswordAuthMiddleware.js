require('dotenv').config()
const SECRET_SERVER_PASSWORD = process.env.SECRET_SERVER_PASSWORD;

function passwordAuthMiddleware(req, res, next) {
    const headers = req.headers; // { 'content-type': 'application/json', ...  authorization: 'asdf1234' }
    const passwordInput = headers.authorization; // "asdf1234"

    if(passwordInput === SECRET_SERVER_PASSWORD) {
        // if password matches 
        // good request
        // go to the next guy
        next ();
        
    } else {
        // if password does not match
        // bad request
        return res.status(401).json({
            success: false,
            message: "Unauthorized you will not be able to access the data MIDDLEWARE"
        });
        
    }
}

module.exports = {
    passwordAuthMiddleware
}