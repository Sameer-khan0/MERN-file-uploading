const mongoose=require('mongoose')

const Postschema=new mongoose.Schema({
    url:{
        type:String,
        require:true
    }
},{timestamps:true})

const Post=mongoose.model('Posts',Postschema)
module.exports=Post