const mongoose = require('mongoose');
const itemSchema=new mongoose.Schema({
    itemName:{
        type:String,

    }, 
    itemSubtitle:{
        type:String,
        
    },
    itemDescription:{
        type:String,
        
    },
    itemImage:{
        type:String,
        
    },
    isPublic:{
        type:Boolean,
        default:false,
    }
})
const Item=mongoose.model('Item',itemSchema);
module.exports=Item;