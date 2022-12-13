const mongoose = require ('mongoose');

const registerSchema = new mongoose.Schema({
    email:{
        type: String, 
        trim:true,
        unique: true, 
        required: 'Email is required'
    },
    firstName:{
        type: String,
        trim:true, 
        required:'firstName is required'
    },
    lastName:{
        type: String,
        trim:true, 
        required:'lastName is required'
    },
    department:{
        type:String,
        required:true,
        trim:true
    },
    // date:{
    //     type:Date,
    //     default:Date.now

    // }
    
})


export default mongoose.model("Register", registerSchema)
