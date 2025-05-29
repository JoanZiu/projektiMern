const mongoose = require('mongoose');
const honourSchema=new mongoose.Schema({
    HonourImage:{
        type:String
    },
    HonourTitle:{
        type:String
    },
    HonourSubtitle:{
        type:String
    },
})

const Honour=mongoose.model('Honour',honourSchema);
module.exports=Honour;