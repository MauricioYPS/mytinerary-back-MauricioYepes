import Activity from "../../models/Activity.js";

const updateActivity = async (req, res, next) => {
    try {
        await Activity.updateOne(
            { _id: req.params.id },
            { name: req.body.name }
        )
        return res.status(200).json({
            response: 'Updated'
        })
    } catch (error) {
        next(error)
    }
}

const updateAndFindOne = async (req, res, next) => {
    try {
        let upd = await Activity.findOneAndUpdate(
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

export { updateActivity, updateAndFindOne }