import Activity from "../../models/Activity.js";

let creat = async (req,res,next) => {
    try {
        let activity = req.body
        let all = await Activity.create(activity)
        return res.status(201).json({
            response: all

        })

    } catch (error) {
        next(error)

    }
}

let creatMany = async (req, res,next) => {
    try {
        let activity = req.body
        let all = await Activity.insertMany(activity)
        return res.status(201).json({
            response: all
        })

    } catch (error) {
        next(error)

    }
}
export {creat,creatMany}