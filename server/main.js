const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()



//import module
const User = require('./routes/LoginFacebook')

//middleware
app.use(bodyParser.json())
app.use(cors())
const verify = require('./models/verifyToken')

//router middleware
app.use('/login',User)

app.get('/verify',verify,(req,res)=>{
    res.send(req.body.username)
})

app.get('/',(req,res)=>{
    res.send("Welcome to server page!!!")
})

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    ()=> console.log('completed connect to DB')
)

app.listen(8080,()=>{
    console.log('Hello server')
})