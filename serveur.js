const express=require('express')

const app=express()
const port=4000
const homeRoute=require('./Home/home')
const servicesRoute=require('./Our Services/Our Services')
const contactRoute=require('./Contact us/Contact us')




// app.use(express.static('./public'))

app.use("/" , homeRoute ,  function(req, res, next){
    
    next();
})


app.use("/OurServices" , servicesRoute ,function(req, res, next){
 
    next();
})


app.use("/ContactUs" , contactRoute ,function(req, res, next){
   
    next();
})




app.listen(port, function() {
    console.log('The server is running')})
