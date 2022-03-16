const router = require('express').Router();
const bodyParser = require('body-parser')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const User = require('../models/user')

dotenv.config();

router.post('/', bodyParser.json(), async (req, res) => {
    let token = req.body.token
    let result = await axios.get('https://graph.facebook.com/me', {
        params: {
            fields: 'id,name,email,picture.width(200).height(200)',
            access_token: token
        }
    })
    if(!result.data.id){
        res.sendStatus(403)
        return
    }
    let data = { username: result.data.id }
    let access_token = jwt.sign(data, 
        process.env.TOKEN_SECRET, 
        {expiresIn: '1800s'}
    )
    const user = new User({
        name: result.data.name,
        email: result.data.email,
        picture: result.data.picture.data.url
    })
    try{
        const saveUser = await user.save()
        res.send({access_token,result:result.data})
    }catch(err){
        res.send(err)
    }
})


module.exports = router;