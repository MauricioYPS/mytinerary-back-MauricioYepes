import Itinerary from "../../models/Itinerary.js";
import   "../../models/Activity.js";
import   "../../models/City.js";
import Cities from "../../models/City.js";
import { response } from "express";

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


let itinerariesByCity = async (req, res, next) => {
    try {
        let cityName = req.params.city; 

        let city = await Cities.findOne({ name: cityName });
        if (!city) {
            return res.status(404).json({ message: 'Ciudad no encontrada' });
        }

        let itineraries = await Itinerary.find({ city: city._id }); 
        
        return res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
};



export {allItineraries, itinerariesByID, itinerariesByCity}
