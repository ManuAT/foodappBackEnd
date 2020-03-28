var mongoose = require('mongoose');

module.exports = mongoose.model('shop', {
    shopNo :{
        type : Number,
        default: 0 
    },
    name :{
        type : String,
        default :""
    },
   
    location :{
        type: String,
        default : ""
    },

    stockNo :{
        type : Number,
        default: 0 
    },
    
    phoneNo :{
        type : Number,
        default: 0 
    }

    
});