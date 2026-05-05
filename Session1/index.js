const httpModule = require('http');
const PORT = 8089; 
// you can have any port here , 100, 200, 500, 64709
// there are ports you cant use like, 80, 81, .... these are reserved for http and https


const server = httpModule.createServer((req, res) => {
    const url = req.url;

    if(url === "/"){
        res.write("<h1>Home page Welcome to the website 1</h1>");
        res.write("<h1>Home page Welcome to the website 2</h1>");
        res.end();
    }
    else if(url === "/about"){
        res.write("abouts page: this page is created by utkarsh")
        res.end(" Nice page");
    }
    else if(url === "/contact"){
        res.end("Contact Page : email : thakurutkarash2@gmail.com   ");
    }
});

server.listen(PORT, () => {
    console.log(`Thumbs up Server is running on port ${PORT}`);
});