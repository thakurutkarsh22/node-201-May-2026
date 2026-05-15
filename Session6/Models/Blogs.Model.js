const mongoose = require('mongoose');
const validatorPackage = require('validator');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Blog title is required !! utkarsh'],
            trim: true,
            minlength: 3,
            maxlength: 100,
            validate: (inputTitle) => {
                // inputTitle is the title "title": "#$%#%#$^#$^#$^#$%&#$%&#$%&$#&^$%&#%&",
                
                for(let i = 0; i < inputTitle.length; i++) {
                    //check for space and alphabets and number 
                    if(
                        inputTitle[i] === ' ' 
                        || (inputTitle[i] >= 'a' && inputTitle[i] <= 'z') 
                        || (inputTitle[i] >= 'A' && inputTitle[i] <= 'Z') 
                        || (inputTitle[i] >= '0' && inputTitle[i] <= '9')) {
                        continue;
                    } else {
                        // this is invalid title 
                        return false;
                    }
                }
                return true;
            }
        },
        content: {
            type: String,
            required: [true, 'Blog content is required !!'],
            trim: true,
        },
        author: {
            type: String,
            required: true,
            validate: (inputAuthor) => {
                return validatorPackage.isAlpha(inputAuthor);
            },
            message: 'Author name must contain only alphabets',
        }
    },
    {
        timestamps: true,
    }
);


const BlogModel = mongoose.model('Blog', blogSchema);

// Blog is a collection (Actual MONGODB collection name)

module.exports = BlogModel;
