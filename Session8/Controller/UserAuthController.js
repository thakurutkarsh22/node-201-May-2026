const UserAuthService = require("../Services/UserAuthService");

async function registerUser(req, res) {
    const userData = req.body;
    /**
     * {
  "name": "Utkarsh Sharma",
  "email": "utkarsh.sharma@example.com",
  "password": "securePass123",
  "age": 28,
  "gender": "Male",
  "address": "Chennai, Tamil Nadu, India",
  "role": "user"
}
     */

    try {
        const response = await UserAuthService.registerUser(userData);
        res.json({
            success: true,
            message: "User registered successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error
        });
    }
    
}

async function loginUser(req, res) {
    const userData = req.body; // { email: "utkarsh@gmail.com", password: "123456" }
    try {
        const response = await UserAuthService.loginUser(userData);
        res.json({
            success: true,
            message: "User logged in successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error logging in user",
            error: error.message
        });
    }
}

module.exports = {
    registerUser,
    loginUser
}