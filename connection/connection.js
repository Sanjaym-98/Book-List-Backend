const mongoose =require("mongoose");
const URL = "mongodb+srv://sanjaym1998:EhMHug730tnWkKCB@cluster0.jao4mrc.mongodb.net/Booklist?retryWrites=true&w=majority";

async function myfunc(){
    await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology:true})

console.log("connected to db")
}

module.exports =myfunc;
