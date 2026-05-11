const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Blog title is required !! utkarsh'],
            trim: true,
            minlength: 3,
            maxlength: 200,
        },
        content: {
            type: String,
            required: [true, 'Blog content is required !!'],
            trim: true,
        },
        author: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


const BlogModel = mongoose.model('Blog', blogSchema);

// Blog is a collection (Actual MONGODB collection name)

module.exports = BlogModel;
