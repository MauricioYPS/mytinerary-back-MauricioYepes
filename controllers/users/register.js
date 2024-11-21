import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false
        let all = await User.create(user)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let registerMany = async (req, res, next) => {
    try {
        let user = req.body
        let all = await User.insertMany(user)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { register, registerMany }