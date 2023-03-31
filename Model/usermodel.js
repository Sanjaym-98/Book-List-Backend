const mongoose= require('mongoose');
const schema = mongoose.Schema;


const userschema = new schema ({
    email:{type:String,unique:true},
    password:{type:String, min:6, max:12}
    
},{timestamps:true})

const usermodel= mongoose.model("bookuser",userschema);

module.exports = usermodel;