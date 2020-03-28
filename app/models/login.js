var mongoose = require('mongoose');

module.exports = mongoose.model('login', {
    phone :{
        type : String,
        default :""
    },
    password :{
        type:String,
        default:""
    },
    department :{
        type:Number,
        default:0
    },
    time :{
        type: String,
        default : ""
    },
    details :{
        type : String,
        default :""
    },
    lat :{
        type:Number,
        default:0
    },
    log :{
        type:Number,
        default:0
    },
    
});