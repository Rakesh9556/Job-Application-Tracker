// Define the ApiError class by extending the Error class

class ApiError extends Error {
    // create a instance of the class (object)
    constructor(
        statusCode,  // represent the status code to be sent in the response
        message = "Something went wrong", // represents the message associated with the error
        errors = [], // represents the additional error message
        stack = ""  // stack race information
    ) {
        super(message); // call the constructor of the parent class "Error", it will ensure that ApiError  constructor is properly initialized
        this.statusCode = statusCode // assigns the value of the statusCode parameter to the statusCode property of the ApiError instance
        this.data = null
        this.success = false
        this.errors = errors

        if(stack) {
            this.stack = stack
        }else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}