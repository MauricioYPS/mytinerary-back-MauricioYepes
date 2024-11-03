import Itinerary from "../../models/Itinerary.js";

let deleteOne = async (req, res, next) => {
    try {
        let destroy = await Itinerary.findByIdAndDelete(req.params.id)
if (destroy) {
    return res.status(200).json({
        response: destroy
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

export {deleteOne}