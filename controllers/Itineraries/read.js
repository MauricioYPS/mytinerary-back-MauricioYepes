import Itinerary from "../../models/Itinerary.js";
import   "../../models/Activity.js";

let allItineraries = async (req,res,next) => {
try {
    let {activity} = req.query
    console.log(activity);
    
    let query = {}
    if (activity){
        query.Itinerary = {$regex: '^'+activity, $options:'i'}
    }
    let all = await Itinerary.find(query).populate('activities','').exec()
    return res.status(200).json({
        response:all
    })

} catch (error) {
    next(error)
}

}



let  itinerariesByID = async (req,res,next) => {
    try {
        let itineraryQ = req.params.id
        let all = await Itinerary.find({_id : itineraryQ})
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}


export {allItineraries, itinerariesByID}
