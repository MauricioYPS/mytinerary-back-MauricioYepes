import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.body.email || req.user.email },
            { online: true }
        )
        return res.status(200).json({
            success: true,
            message: 'Signed in',
            user:{
                email: req.user.email,
                photoUrl : req.user.photoUrl,
                country : req.user.country
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}
