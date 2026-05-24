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
    const { name, email, password, age, gender, address, role } = userData;

    try {
        const response = await UserAuthService.registerUser({ name, email, password, age, gender, address, role });
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
        const token = response.token;
        res.cookie("auth-token", token, { httpOnly: true, secure: true, maxAge: 3600000 });
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