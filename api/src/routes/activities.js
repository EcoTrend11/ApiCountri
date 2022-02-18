const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");
const {toUpper} = require('../auxMayus')

const router = Router();

router.get('/',  async (req, res) =>{
    const findActivity = await Activity.findAll()
    res.send(findActivity)
  })

router.post('/addActivity', async (req, res)=>{




        const { name, level, duration, season} = req.body
        const countriId = req.body.countriId
    
        const createActivity= await Activity.create({
            name : name,
            level : level,
            duration : duration,
            season : season,
        })
        console.log(countriId)
        
        
        await createActivity.addCountry(toUpper(countriId[0]))
        res.send("creado con exito")

        
        
}) 


module.exports = router