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

        const search = countriId.map(async (e) => {
          let country = await Country.findByPk(e)
          // console.log(country)
          
        })
        console.log(search)
        res.send(search)



        // if(countriId.length === 1){
        //   const searchActivityCountry = await Country.findByPk(countriId[0],{
        //     include : [{
        //       model : Activity,
        //       where: {name : name}
        //     }]
        //   })
          
        //   if(searchActivityCountry){
        //     res.send(`el pais de id(s):${countriId[0]} ya tiene esa actividad`)
        //   }else{

        //   const createActivity= await Activity.create({
        //       name : name,
        //       level : level,
        //       duration : duration,
        //       season : season,
        //   })
                  
        //   await createActivity.addCountry(toUpper(countriId[0]))
        //   res.send(`Actividad ${name} creadad en el pais de id${countriId[0]}`)
        //   }
        // }
        // if(countriId.length > 1){

        
         


        
        
}) 


module.exports = router