const mongoose = require("mongoose");

const TaskSchema=new mongoose.Schema({
    text:{
        type:String,
        maxlength: [50,'text can not be more than 50 characters']
    },
    day:{
        type:String 
    },
    reminder:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('Task', TaskSchema)