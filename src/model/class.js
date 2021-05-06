const mongoose = require("mongoose");
const validator = require("validator");
const prepSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,




    },
    age:{
        type: Number,
        required: true,
        



    },
    email:{
        type: String,
        required: true,
        unique:[true,"Email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email already exist")

            }


        }

    }


})
const Prep = new mongoose.model("Class",prepSchema)
module.exports = Prep;