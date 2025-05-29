const mongoose = require('mongoose');
const contactSchema=new mongoose.Schema({
    firstName:{
        type:String,
        // required:true,

    }, lastName:{
        type:String,
        // required:true,
        
    }, email:{
        type:String,
        // required:true,
        
    },password:{
        type:String,
        // required:true,
        
    },terms:{
        type:Boolean,
        // required:true,
    }
})
const Contact=mongoose.model("Contact",contactSchema);
module.exports=Contact; // eksportimi i modelit Contact
