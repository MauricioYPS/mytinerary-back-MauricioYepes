import { Schema, model } from "mongoose";

let collection = 'Activities';
let schema = new Schema({
    name: {type: String,required: true},
    description: {type: String,required: true},
    location: {type: String,required: true},
    schedule: {type: String,required: true},
    cost: {type: Number,required: true},
    photo: {type: String,required: true}
}, {
    timestamps: true
});

let Activity = model(collection, schema);
export default Activity;
