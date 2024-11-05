import Itinerary from "../../models/Itinerary.js";

const updatePhoto = async (req, res, next) => {
    try {
        await Itinerary.updateOne(
            { _id: req.params.id },
            { photo: req.body.photo }
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
        let upd = await Itinerary.findOneAndUpdate(
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


export { updatePhoto, updateAndFindOne }