const express = require('express');
const UserActivityRouter = require('./Routers/UserActivityRouter');
const HomeRouter = require('./Routers/HomeRouter');
const BlogRouter = require('./Routers/BlogRouter');
const UserAuthRouter = require('./Routers/UserAuthRouter');
const { passwordAuthMiddleware } = require('./Middleware/AuthMiddleware/PasswordAuthMiddleware');
const { default: mongoose } = require('mongoose');
const server = express();
const PORT = 8089;
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('./Config/Passport');

passportConfig(passport); // this will configure the passport strategies for my app

//impmement cors middleware
server.use(cors());// this will allow all the domains to access the server


// Middleware to parse the request body
// behind the scenes this guy must be doing JSON.parse(req.body)
server.use(express.json());


// (req, res) => {} -> request handler Function

server.use("/", HomeRouter);

server.get('/contact', (req, res, next) => {
    res.send("Contact Page : email : thakurutkarash2@gmail.com phone: 982391827631");
});


//  USER ACTIVITY 
// use supports all the http methods - get, post, put, delete, patch
server.use("/api/v1/users", UserActivityRouter);


// BLogs Functionality
server.use("/api/v1/blogs", BlogRouter);

// user auth 
server.use("/api/v1/users/auth", UserAuthRouter);


const dbURL = "mongodb://localhost:27017/";
const dbName = "crio-may";

const connection = dbURL + dbName;

mongoose.connect(connection).then((data) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

server.listen(PORT, () => {
    console.log(`Server is running on port express!! ${PORT}`);
});
