var mongoose = require('mongoose');

module.exports = mongoose.model('order', {
    itemName :{
        type: String,
        default : ""
    },
   
    time :{
        type: String,
        default : ""
    },
    stockNo :{
        type:String,
        default:""
    },
    
    shopName :{
        type:String,
        default:""
    },
    
    qundity :{
        type : Number,
        default: 1
    },
    phone :{
        type : String,
        default: ""
    }
    
    
});