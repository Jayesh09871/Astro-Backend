import mongoose from "mongoose";

const guruSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        required : true,
        enum: ['male', 'female', 'other']
    },
    dob : {
        type:String,
        required:true, 
        trim:true
    },
    phone : {
        type : String,
        minLength : 10
    },
    rating : {
        type : Number,
        min : 0,
        max : 10,
        default : 0
    },
    email : {
        type : String,
        trim : true,
        lowercase: true,
        unique: true,
        required : true
    },
    password : {
        type : String,
        minLength : 4,
        maxLength : 20,
        trim : true,
        required : true
    },
    flowCount : {
        type : Number,
        default : 0
    }

},{timestamps:true});  

export default mongoose.model("GuruData", guruSchema);
