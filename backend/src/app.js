import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// use cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,  // this is the link of the frontend application
    credentials: true
}))

// accept cookies
app.use(cookieParser())

// accept json data
app.use(express.json({limit: "16kb"}))

// accept url data
// make it extended true so that we can pass object to it
app.use(express.urlencoded({extended: true,limit: "32kb"}))

// config the servere to store static files and multimedia to the server
app.use(express.static("public"))


export {app}