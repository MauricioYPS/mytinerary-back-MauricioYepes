import { Schema, model } from "mongoose";

let collection = 'Itinerary'
let schema = new Schema({
    namePerson :{type: String,required:true},
    photoPerson :{type: String,required:true},
    nameActivity :{type: String,required:true},
    photoActivity :{type: String,required:true},
    price :{type: Number,required:true},
    duration :{type: Number,required:true},
    likes : {type: Number,required:true},
    hashtags : {type: Array,required:true},
    comments : {type: String,required:true},

},{
    timestamps:true
}
)
let Itinerary = model(collection,schema)
export default Itinerary