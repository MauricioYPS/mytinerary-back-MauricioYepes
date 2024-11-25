import { Schema, model } from "mongoose";

let collection = 'Countries'
let schema = new Schema({
    name :{type: String,required:true},
},{
    timestamps:true
}
)
let Countries = model(collection,schema)
export default Countries