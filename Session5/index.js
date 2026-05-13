const express = require('express');
const UserActivityRouter = require('./Routers/UserActivityRouter');
const HomeRouter = require('./Routers/HomeRouter');
const BlogRouter = require('./Routers/BlogRouter');
const { passwordAuthMiddleware } = require('./Middleware/PasswordAuthMiddleware');
const { default: mongoose } = require('mongoose');
const server = express();
const PORT = 8089;


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
server.use("/api/v1/users", passwordAuthMiddleware, UserActivityRouter);


// BLogs Functionality
server.use("/api/v1/blogs", BlogRouter);


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
