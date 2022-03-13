const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome to server page!!!!!!!!")
})

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    ()=> console.log('completed connect to DB')
)

app.listen(8080,()=>{
    console.log('Hello server')
})