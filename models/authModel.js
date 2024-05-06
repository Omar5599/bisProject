const mongoose =require("mongoose");




const userSchema=mongoose.Schema({
    userId:String,
    name:String,
    username:String,
    email:String,
    password:String
});

const authModel = mongoose.model("User",userSchema);


module.exports = authModel;

