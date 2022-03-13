const router = require('express').Router();
const bodyParser = require('body-parser')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const user = require('../models/user')

dotenv.config();

router.post('/', bodyParser.json(), async (req, res) => {
    let token = req.body.token
    let result = await axios.get('https://graph.facebook.com/me', {
        params: {
            fields: 'id,name,email,picture',
            access_token: token
        }
    })
    if(!result.data.id){
        res.sendStatus(403)
        return
    }
    let data = { username: result.data.email }
    let access_token = jwt.sign(data, 
        process.env.TOKEN_SECRET, 
        {expiresIn: '1800s'}
    )
    res.send({access_token})
})


module.exports = router;