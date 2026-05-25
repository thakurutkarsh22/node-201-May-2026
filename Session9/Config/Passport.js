const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET; // we need this to unjumble the token

// ExtractJwt - extract the token from the request header 
/**
 * 
 * Authorization: bearer {{jwt_token}} 
 */


const config = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

// // verify the token  
const stratergy = new JwtStrategy(config, (payload, done) => {
    console.log("payload from passport", payload);
    try {
        // req is good no error , verify the token  was successfull 
        // return done(null, true);
        return done(null, payload);
    } catch (error) {
        return done(error, false);
    }
});

module.exports = (passport) => {
    passport.use(stratergy);
}

