const express = require("express")
const app = require("express")()
const cors = require("cors")
const path = require("path")
app.use(cors())
const PORT=4000

app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',((req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
}))

app.listen(PORT,()=>{
    console.log('Listening on port 4000')
})