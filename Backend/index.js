const express=require('express')
const cors=require('cors')
const app=express()
const db=require('./database/db')
require('dotenv').config()
const port =process.env.PORT
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

db()
app.get('/',(req,res)=>{
    res.json("Server is runnign")
})

app.use('/user',require('./routes/user'))
app.use('/posts',require('./routes/posts'))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

module.exports = app;