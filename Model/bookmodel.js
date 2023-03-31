const mongoose= require('mongoose');

const ObjectId =require('mongoose').ObjectId;

const bookschema =new mongoose.Schema ({
    title:{type:String, required:true},
    isbn:{type:String,required:true},
    author:{type:String,required:true},
    description:{type:String,required:true},
    publish:{type:String},
    publisher:{type:String,required:true}
},{timestamps : true})

const bookmodel = mongoose.model("books",bookschema);

module.exports = bookmodel;