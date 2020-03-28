var mongoose = require('mongoose');

module.exports = mongoose.model('stock', {
    stockNo :{
        type : Number,
        default :0
    },
    itemName :{
        type : String,
        default: "" 
    },

    shopName :{
        type : String,
        default: "" 
    },

    time :{
        type: String,
        default : new Date()
    },
    quantity :{
        type:Number,
        default:0
    },
    
    cost :{
        type:Number,
        default:0
    },
    
   
    
    
});