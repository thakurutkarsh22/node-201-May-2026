// NPM - Node Package Manager - it is a package manager for the node.js
const express = require('express'); // is using http module behind the scenes
const users = require('./data');
const server = express();
const PORT = 8089;


// (req, res) => {} -> request handler Function
server.get('/', (req, res) => {
    
    // send keyword is not in nodejs 
    // behind the scenes uses res.write and res.end
    // when we want to send text, string, HTML we will use send (almost all the case)
    res.send("Express js sWelcomes you to the website");

    // you cant do here anything else after res.send
});

server.get('/about', (req, res) => {
    res.send("About Page : utkarsh create this page");
});

server.get('/contact', (req, res) => {
    res.send("Contact Page : email : thakurutkarash2@gmail.com phone: 982391827631");
});




// 1. get all the users
server.get("/api/v1/users/allUsers", (req, res) => {
    const allUsersData = users;

   
    
    const payload = {
        success: true,
        data: allUsersData,
        size: allUsersData.length
    }

     // behind the scenes it is using res.write and res.end
    // json is only available with express js and not nodejs
    // when we want to send objects, arrays 
    res.json(payload);
});

server.get("/api/v2/users/allUsers", (req, res) => {
    const allUsersData = users;

   
    
    const payload = {
        data: allUsersData,
    }

     // behind the scenes it is using res.write and res.end
    // json is only available with express js and not nodejs
    // when we want to send objects, arrays 
    res.json(payload);
});



// query params
//2.  we need to get the users by gender
// https://www.google.com/search?q=virat

// our URL : http://localhost:8089/api/v1/users/allUsersByGender?gender=male
server.get("/api/v1/users/allUsersByGender", (req, res) => {
    const allUsersData = users;

    const query = req.query; // { gender: 'male' } 
    const searchedGender = query.gender;


    const filteredUsers = allUsersData.filter((user) => {
        if(user.gender === searchedGender) {
            return true;
        }
        return false;
    });

    const payload = {
        success: true,
        data: filteredUsers,
        size: filteredUsers.length
    }

    res.json(payload);
});



// url params 
//3. we want to get user by name 
server.get("/api/v1/users/getUserByName/:name", (req, res) => {
    const allUsersData = users;
    
    const params = req.params; // { name: 'virat' } 
    const searchedName = params.name;

    const user = allUsersData.find((user) => {
        if(user.name === searchedName) {
            return true;
        }
        return false;
    });
    
    const payload = {
        success: true,
        data: user,
        size: 1
    }

    res.json(payload);
});



server.listen(PORT, () => {
    console.log(`Server is running on port express!! ${PORT}`);
});