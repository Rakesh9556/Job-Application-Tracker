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

        // accesiing fields from the frontend
        const {fullname, username, email, password} = req.body

        // validate the fields
        if([fullname, username, email, password].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required")
        }

        // check if user is already exist or not
        const existerdUser = User.findOne({
            $or: [{email}, {username}]
        })

        if(existerdUser) {
            throw new ApiError(400, "Email or username already exists!")
        }

        // all cases handle now create a user object and store it
        const user = await User.create({
            fullname,
            email,
            password,
            username : username.toLowerCase()

        })

        // return the creaeted user in response to the client 
        // remove sensitive fileds using select keyword
        const createdUser = User.findById(user._id).select(
            "-password -refreshToken"
        )

        // check if the user is created or not
        if(!createdUser) {
            throw new ApiError(500, "Something went wrong! Try again")
        }

        // if user successfully exist show the message that user created
        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered successfully")
        )

        
    })
}