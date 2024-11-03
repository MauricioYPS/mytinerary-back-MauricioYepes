import { Schema, model } from "mongoose";

let collection = 'Itinerary'
let schema = new Schema({
    photo :{type: String,required:true},
    price :{type: Number,required:true},
    duration :{type: Number,required:true},
    likes : {type: Number,required:true},
    hashtags : {type: String,required:true},
    comments : {type: String,required:true},

},{
    timestamps:true
}
)
let Itinerary = model(collection,schema)
export default Itinerary