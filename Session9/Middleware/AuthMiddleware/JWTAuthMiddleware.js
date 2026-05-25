const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
function jwtAuthMiddleware(req, res, next) {
    
    const headers = req.headers; // { 'content-type': 'application/json', ...  authorization: 'bearer 49u1249wklehrqwhkrjblaskjbflasjbf' }
    const asdasdfasfsfa = headers.authorization; // "bearer 49u1249wklehrqwhkrjb"
    const token = asdasdfasfsfa?.split(" ")[1]; // "49u1249wklehrqwhkrjb"

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Please login it seems you have not logged in ever 1st time"
        });
    } else {
        // verify the token 
        jwt.verify(token, JWT_SECRET, (error, decodedPayload) => {
            if(error) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                    error: error
                });
            } else {
                // good request
                console.log("decodedPayload from middleware", decodedPayload);
                next();
            }
        } );
    }

}

module.exports = jwtAuthMiddleware;