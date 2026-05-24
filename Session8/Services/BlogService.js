const BlogModel = require("../Models/Blogs.Model");

class BlogService {

    // LERN:  OOPS -> JAVA (Own methods) (1 month)
    // Dependency Injection - DI
    // constructor(UserService) {
    //     this.userService = UserService;
    // }

    constructor(){
        
    }

    // static method - no need to create object of BlogService
    // bec this createBlog method is created by BlogService class itself
    static async createBlog(blogData) {

        // find user userService 
        // this.userService.getUser(blogData.author);

         // object of blog  - logic

        const blogObject = new BlogModel({ title: blogData.title, content: blogData.content, author: blogData.author });


        // talk to db to save this blogObject 

        try {
            const response = await blogObject.save(); // actual DB CALL for INSERTION in DB 
            console.log("Blog created successfully form class", response);
            return {
                success: true,
                message: "Blog created successfully form class",
                data: response,
            };
        } catch(error) {
            return error
        }
    }
}

module.exports = BlogService;