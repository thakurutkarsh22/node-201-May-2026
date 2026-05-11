const express = require('express');
const UserActivityRouter = require('./Routers/UserActivityRouter');
const HomeRouter = require('./Routers/HomeRouter');
const { passwordAuthMiddleware } = require('./Middleware/PasswordAuthMiddleware');
const server = express();
const PORT = 8089;

// (req, res) => {} -> request handler Function

server.use("/", HomeRouter);

server.get('/contact', (req, res, next) => {
    res.send("Contact Page : email : thakurutkarash2@gmail.com phone: 982391827631");
});


//  USER ACTIVITY 
// use supports all the http methods - get, post, put, delete, patch
server.use("/api/v1/users", passwordAuthMiddleware, UserActivityRouter);


server.listen(PORT, () => {
    console.log(`Server is running on port express!! ${PORT}`);
});