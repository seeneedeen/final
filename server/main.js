const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome to server page!!!!!!!!")
})

app.post('/',(req,res)=>{
    if(req.body.msg)
        res.send({msg:"hello"})
    else
        res.sendStatus(400).send({msg:"error"})
})

app.listen(8080,()=>{
    console.log('Hello server')
})