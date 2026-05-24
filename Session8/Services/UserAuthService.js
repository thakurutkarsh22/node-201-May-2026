const UserModel = require("../Models/Users.Model");

class UserAuthService {
    constructor() {
    }

    static async registerUser(userData) {
        try {
            // this is a user object  - LOGIC 
            // how user data will look ? { name: "Utkarsh", email: "utkarsh@gmail.com", password: "123456" }
            const userObject = new UserModel(userData);

            // talk to db to save this userObject 
            const response = await userObject.save();
            return response;
        } catch (error) {
            return error;
        }
    }

    static async loginUser(userData) {
        // userData -> { email: "utkarsh@gmail.com", password: "123456" } -> postmand

        // 1. find user by email
        const user = await this.findUserByEmail(userData.email);
        if(!user) {
            throw new Error("User not found");
        } else {
            // check if the password is correct
            const isPasswordCorrect = user.password === userData.password;
            
            console.log("isPasswordCorrect", isPasswordCorrect);
            console.log("user.password", user.password);
            console.log("userData.password", userData.password);
            
            if(!isPasswordCorrect) {
                throw new Error("Invalid password");
            } else {
                return user;
            }
        }
    }

    static async findUserByEmail(email) {
        const user = await UserModel.findOne({ email: email });
        return user;
    }

    static async findUserById(userData) {
        const user = await UserModel.findById(userData.id);
        return user;
    }
}

module.exports = UserAuthService;