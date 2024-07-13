import express from 'express'

const app = express()

// use cors
app.use(cors({
    origin: 'http://example.com',
    credentials: true
}))

// accept cookies
app.use(cookieParser())


export {app}