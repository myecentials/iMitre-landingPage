const express = require("express")
const app = require("express")()
const cors = require("cors")
const path = require("path")
app.use(cors())
const PORT=4000

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'imitre@outlook.com',
    pass: 'Asdfghjkl50*',
  }
});




app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/get_try_link',(req,res)=>{
    res.send("Server is running")
})
app.post('/email',(async(req,res)=>{
    try{

        console.log(req?.body)

        const mailOptions = {
            from: 'imitre@outlook.com',
            to: req?.body.user_email,
            subject:`Form email from ${req?.body.user_name}`,
            html: `<Html>
            <p>Email received.</p>
            Our team will respond within the shortest possible time.<br/> Your message was:<br/> ${req?.body.user_message}
            <br/>
            <p style="margin-right:"auto";>Regards</p>
            <p style="margin-right:"auto";>Imitre</p>
            </Html>`
          };
          
          
          
    
        await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }); 
    
    
        res.status(201).json({"message":"email sent successfully"})
    }catch(e){
        res.status(400).send(`${e}`)
    }


}))
app.get('/',((req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
}))

app.get('*',((req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
}))

app.listen(PORT,()=>{
    console.log('Listening on port 4000')
})