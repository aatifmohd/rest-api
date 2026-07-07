const express = require('express')
const app = express()
const port = 5001

app.get('/hello',(req,res)=>{
    res.json({
        msg:"Hi there"
    })
})

app.listen(port,()=>{
 console.log(`running on ${port}`);
 
})