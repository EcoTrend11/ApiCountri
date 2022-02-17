const express = require('express');
const router = express.Router();
const { Country, Activity } = require("../db.js");

router.get('/',  async (req, res) =>{
    const findActivity = await Activity.findAll()
    res.send(findActivity)
  })

router.post('/addActivity',  async (req, res) =>{
    const countryId = req.body.countryId
    const activity = req.body.activity
    
    const findActivity = await Activity.findAll({
        where : {
            name : activity[0].name
        }
    })
    if(findActivity.length === 0){

        await activity.map(e =>{
            Activity.create({
                name : e.name,
                level : e.level,
                duration : e.duration,
                season : e.season
            })
            console.log("actividad creada")
        })
    }

    findActivity

    

    console.log(findActivity.length)    
    // const prueba = await activity.map(e =>{
    //     Activity.create({
    //         name : e.name,
    //         level : e.level,
    //         duration : e.duration,
    //         season : e.season
    //     })
    // })

    res.send("sss")


})
module.exports = router