import User from "../../models/User.js";

const updateUser = async (req,res,next) => {
    try {
        let upd = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (upd) {
            return res.status(200).json({
                response: upd
            })
        } else {
            return res.status(404).json({
                response: 'Not Found'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default updateUser