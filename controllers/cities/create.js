import { response } from "express";
import Cities from "../../models/City.js";

let creat = async (req,res,next) => {
    try {
        let city = req.body
        let all = await Cities.create(city)
        return res.status(201).json({
            response: all

        })
        
    } catch (error) {
        next(error)
        
    }
}
let creatMany = async (req, res,next) => {
    try {
        let city = req.body
        let all = await Cities.insertMany(city)
        return res.status(201).json({
            response: all
        })

    } catch (error) {
        next(error)

    }

}
export {creat,creatMany}