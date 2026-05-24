const joi = require('joi');


// I am defining the schema for the blog input body
const blogInputValidationSchema = joi.object({
    title: joi.string().required().min(3).max(100).pattern(/^[a-zA-Z0-9\s]+$/),
    content: joi.string().required().min(10).max(1000),
    author: joi.string().required().min(3).max(100).pattern(/^[a-zA-Z\s]+$/),
});



/**
 * blogbody: 
    {
    "title": "I like food chinese",
    "content": "Hello world, this is my first blog post.",
    "author": "ankushmalik",
    "Adasdasdasda": "Asdadasdaasda",
    "hladlsdlauf276976123r": "adasfsfsadfasdfas"
}

    // validateBlogInput(blogbody)
 */

function validateBlogInput(blogbody) {
    // blogbody is the body of the request
    const response = blogInputValidationSchema.validate(blogbody);
    const error = response.error;
    if(error) {
        return error;
    } else {
        return true;
    }
}

module.exports = validateBlogInput;