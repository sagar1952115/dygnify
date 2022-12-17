const mongoose=require("mongoose");

const Loanschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:false,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false,
    },
    businessname:{
        type:String,
        required:false,
    },
    businessaddress:{
        type:String,
        required:false,
    },
    gstno:{
        type:String,
        required:false,
    },
    businessmobile:{
        type:String,
        required:false,
    },
    businessemail:{
        type:String,
        required:false,
    },
    loanamount:{
        type:String,
        required:false,
    },
    interestrate:{
        type:String,
        required:false,
    },
    tenure:{
        type:String,
        required:false,
    },
    panid:{
        type:String,
        required:false,
    },

    
},{timestamps:true});

module.exports=mongoose.model('Loan',Loanschema);