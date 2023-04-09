

const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const userRoute = require('./routes/userRoute')


const app = express();
app.use(express.json())
app.use(cors())

app.use('/',userRoute)

mongoose.connect("mongodb+srv://somilj1616:Server1212@cluster0.eljgz6y.mongodb.net/?retryWrites=true&w=majority",{
     useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("connect")
})
app.listen(5000, async ()=>{
    console.log('working')
})



