import { response } from "express";
import Cities from "../../models/City.js";

let allCities = async (req,res,next)=>{
    try {

        let {name} = req.query
        console.log(name);
        let query = {}
        if (name){
            query.name = {$regex: '^'+name, $options:'i'}
        }
        
        let all = await Cities.find(query)
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}
let citiesByID = async (req,res,next)=>{
    try {
        let cityQ = req.params.id
        let all = await Cities.find({_id : cityQ})
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}
export {allCities,citiesByID}