const express = require('express');
const UserActivityObject = require('../Controller/UserActivityController');
const router = express.Router();

const { GetAllUsersV1, GetAllUsersV2, GetAllUsersByGender, GetUserByName } = UserActivityObject;

// 1. get all the users
router.get("/allUsers",  GetAllUsersV1);

router.get("/allUsersV2", GetAllUsersV2);



// query params
//2.  we need to get the users by gender
// https://www.google.com/search?q=virat

// our URL : http://localhost:8089/api/v1/users/allUsersByGender?gender=male
router.get("/allUsersByGender", GetAllUsersByGender);



// url params 
//3. we want to get user by name 
router.get("/getUserByName/:name", GetUserByName);

module.exports = router;