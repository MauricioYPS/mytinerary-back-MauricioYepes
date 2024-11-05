import Activity from "../../models/Activity.js";

let allActivities = async (req,res,next) => {
    try {

        let {name} = req.query
        console.log(name);
        let query = {}
        if (name){
            query.name = {$regex: '^'+name, $options:'i'}
        }
        
        let all = await Activity.find(query)
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}

let activityByID = async (req,res,next) => {
    try {
        let activityQ = req.params.id
        let all = await Activity.find({_id : activityQ})
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}

export {allActivities,activityByID}