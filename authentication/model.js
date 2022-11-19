const mongoose = require('mongoose');

let Registeruser = new mongoose.Schema({
    firstname :{
        type : String,
        required : true,
    },
    secondname :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required:true,
    },
    confirmpassword : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('Registeruser',Registeruser)