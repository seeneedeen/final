const router = require('express').Router();

const Post = require('../models/PostDB')
const verify = require('../models/verifyToken')


router.post('/create',verify,async (req,res)=>{
    const post = new Post({
        name: req.username,
        msg: req.body.msg
    })
    try{
        const result = await post.save()
        res.json(result)
    }catch(err){
        res.json({msg: err})
    }
})

router.get('/allPost', async (req,res)=>{
    try{
        const result = await Post.find()
        res.json(result)
    }catch(err){
        res.json({msg : err})
    }
})


module.exports = router;