const asyncHandeler = (requestHandeler) => {
    return(req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandeler}




// higher order function
/*
const asyncHandeler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (err) {
        res.statu(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/
