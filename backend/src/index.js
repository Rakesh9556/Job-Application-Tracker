import dotenv from "dotenv"
import dbConnect from "./db/dbConnect.js"
import {app} from "./app.js"

// config dotenv
dotenv.config({
    path: './.env'
})

// establish db connection
dbConnect()
.then(() => {
    app.on('error', (error) => {
        console.error("Server connection failed!");
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    })
})

.catch((err) => {
    console.error("Mongo DB connection failed!");
}) 