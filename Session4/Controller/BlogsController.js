const BlogModel = require("../Models/Blogs.Model");

async function CreateBlog (req, res) {
    const { title, content, author } = req.body;

    // object of blog 

    const blogObject = new BlogModel({ title, content, author });


    // talk to db to save this blogObject 

    try {
        const response = await blogObject.save(); // actual DB CALL for INSERTION in DB 
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: response,
        });
    } catch(Error) {
        res.status(500).json({
            success: false,
            message: "Blog creation failed",
            error: Error,
        });
    }


}

async function GetAllBlogs (req, res) {
    try {
       const reponse = await BlogModel.find({});
       res.status(200).json({
        success: true,
        message: "Blogs fetched successfully",
        data: reponse,
       });
    } catch(Error) {
        res.status(500).json({
            success: false,
            message: "Blogs fetching failed",
            error: Error,
        });
    }
}
async function GetBlogById (req, res) {
    try {
        const { id } = req.params;
        const response = await BlogModel.find({_id: id});
        res.status(200).json({
            success: true,
            message: "Blog fetched successfully",
            data: response,
        });
    } catch(Error) {
        res.status(500).json({
            success: false,
            message: "Blog fetching failed",
            error: Error,
        });
    }
}
function UpdateBlog (req, res) {
    res.send("Blog updated");
}
function DeleteBlog (req, res) {
    res.send("Blog deleted");
}

module.exports = { CreateBlog, GetAllBlogs, GetBlogById, UpdateBlog, DeleteBlog };