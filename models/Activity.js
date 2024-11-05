import { Schema, model } from "mongoose";

let collection = 'Activities';
let schema = new Schema({
    name: {type: String,required: true},
    photo: {type: String,required: true}
}, {
    timestamps: true
});

let Activity = model(collection, schema);
export default Activity;
