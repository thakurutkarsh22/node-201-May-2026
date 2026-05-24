const UserModel = require("../Models/Users.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserAuthService {
    constructor() {
    }

    static async registerUser({name, email, password, age, gender, address, role}) {
        try {
            // this is a user object  - LOGIC 
            // how user data will look ? { name: "Utkarsh", email: "utkarsh@gmail.com", password: "123456" }

            const hashedPassword = await bcrypt.hash(password, 10);

            const userObject = new UserModel({name, email, password: hashedPassword, age, gender, address, role});

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
            // user.password - stored in db - 2b$10$En0/VQmktJ3Wi/oQiqZKr./22WNfVquJ4e0bIJUItgMrfJUgAZ
            //userData.password - password from postman - asdf1234
            
            const isPasswordCorrect = await bcrypt.compare(userData.password, user.password); // true or false
            
            if(!isPasswordCorrect) {
                throw new Error("Invalid password");
            } else {
                const payloadForJwt = {
                    userId: user._id,
                    "helloworld": "yoyo",
                    username: user.username,
                    roles: user.role
                }
                const token = jwt.sign(payloadForJwt, process.env.JWT_SECRET, { expiresIn: '10000' });
                
                const responsePayload = {
                    user: user,
                    token:token
                }
                return responsePayload;
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