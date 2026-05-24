const validateBlogInput = require("../../Validator/BlogInputValidation");

function BlogInputValidationMiddleware(req, res, next) {
    const blogbody = req.body;


    const validationResult = validateBlogInput(blogbody);
    if(validationResult === true) {
        console.log("validationResult NO ERROR", validationResult);
        // no error 
        next();
        
    } else {
        console.log("validationResult ERROR", validationResult);
        return res.status(400).json({
            success: false,
            message: validationResult
        });
    }
}

module.exports = BlogInputValidationMiddleware;