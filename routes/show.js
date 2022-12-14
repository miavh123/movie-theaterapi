const router = express.Router();
const express = require ('express')
const {check,validationResult}= require('express-validator');
const {Show,User}= require ('./models/index');




router.get('/', async (req,res)=>{
    res.json(await Show.findAll())
})

router.get('/:id', async(req,res)=>{
    res.json(await Show.findByPk(req.params.id))
})

router.get('genres/:genreId', async(req,res)=>{
    res.json(await Show.findAll({
        where:{
            genre: req.params.genreId
        }
    }))
    res.json(genreId)
})

router.put('/:ratingId/rating',async (req,res)=>{
    await Show.update({rating:req.params.ratings}
        ,{where: {
            id:req.params.ratingId
        }})
        res.json(await Show.findAll())
})

router.delete('/:id',async (req,res)=>{
    show = await Show/findByPk(req.params.id);
    await Show.destroy
    res.json('Show as been deleted')
})