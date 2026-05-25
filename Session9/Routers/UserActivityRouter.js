const express = require('express');
const UserActivityObject = require('../Controller/UserActivityController');
const { passwordAuthMiddleware } = require('../Middleware/AuthMiddleware/PasswordAuthMiddleware');
const jwtAuthMiddleware = require('../Middleware/AuthMiddleware/JWTAuthMiddleware');
const router = express.Router();
const passport = require('passport');

const { GetAllUsersV1, GetAllUsersV2, GetAllUsersByGender, GetUserByName } = UserActivityObject;


router.get("/allUsers", jwtAuthMiddleware,  GetAllUsersV1);

router.get("/allUsersV2", passwordAuthMiddleware, GetAllUsersV2);



const passportAuthMiddleware = passport.authenticate('jwt', { session: false });

router.get("/allUsersByGender",passportAuthMiddleware , GetAllUsersByGender);



// url params 
//3. we want to get user by name 
router.get("/getUserByName/:name", jwtAuthMiddleware, GetUserByName);

module.exports = router;