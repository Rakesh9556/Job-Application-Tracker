import { User } from "../models/User.model.js";
import {asyncHandeler} from "../utils/asyncHandeler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"
import jwt from "jsonwebtoken"

// genrate accessAndrefreshToken
const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = User.findById(userId);
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        // check the accessToken and refreshToken has some value or not if not throw APIError
        if(!accessToken || !refreshToken) {
            throw new ApiError(500, "Acces or refresh token generation failed")
        }
        
        // if all works good then we will send the accessToken to the user and store the refreshToken in the server
        user.refreshToken = refreshToken 

        // save the user
        await user.save({validateBeforeSave: false})
        
    } 
    catch (error) {
        throw new ApiError("Error while generating access and refersh token")
    }


    // registering the user
    const registerUser = asyncHandeler(async (req, res) => {
        const user = req.body[username, fullname, email, password];

        ///
    })
}