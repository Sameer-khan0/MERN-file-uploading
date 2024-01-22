const express=require('express')
const router=express.Router()
const Post=require('../models/posts')
const uploadOnCloudinary =require('../utility/cloudary')
const upload=require('../middleware/multer')

router.post('/upload',upload.single('file'),async (req,res)=>{
    // console.log(req.file.path) 
    const result=await uploadOnCloudinary(req.file.path)
    console.log(result)
    if(result){
        const posted=await Post.create({
            url: result.url
        })
        return res.json({ cloudinaryUrl: result.url,post:posted });
    }
})
module.exports=router