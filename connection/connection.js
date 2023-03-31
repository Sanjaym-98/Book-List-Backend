const mongoose =require("mongoose");

async function myfunc(){
    await mongoose.connect('mongodb://localhost/bookapp');
console.log("connected to db")
}

module.exports =myfunc;
