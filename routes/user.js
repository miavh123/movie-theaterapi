const express = require('express');
const router = express.Router();
const {Show,User}=require('../models/index');





router.get('/', async (req,res)=>{
   const user = await User.findall() 
    res.json(user)
})


router.get('/:id', async (req,res)=> {
    const userShowId =await User.findByPk(req.params.id)
    res,json(userShowId)
})

router.get('/:id/shows', async (req,res)=> {
    showUser = await User.findByPK(req.params.id)
    res.json (await showUser.getShows())
})


router.put('/:id/show',async (req,res)=>{
    const user = await User.findByPk(req.params.userId)
    const show = await Show.findByPk(req.parmam.showId)

    await user.addShows()

    res.json(await user.getShows())
})

