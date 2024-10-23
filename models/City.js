import { Schema, model } from "mongoose";

let collection = 'Cities'
let schema = new Schema({
    name :{type: String,required:true},
    photo :{type:String,required:true},
    country:{type:String,required:true},
    continent:{type:String,required:true},
    description:{type:String,required:true},
    badge:{type:String,required:true}
},{
    timestamps:true
})

let Cities = model(collection,schema)
export default Cities