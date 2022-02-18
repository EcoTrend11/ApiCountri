const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");
const { toUpper} =require("../auxMayus")

const router = Router();

router.get('/',  async (req, res) =>{

  const findCountry = await Country.findAll()
  res.send(findCountry)
})


router.get('/byId/:id',async (req, res)=>{
  
  const id = req.params.id
  const findCountryById = await Country.findByPk(toUpper(id),{
    include : Activity
  });

  findCountryById ? 
        res.send(findCountryById): 
        res.status(404).send("pais no encontrado con esa id")
})


router.get('/byQuery', async (req, res) =>{
  const name = req.query.name
  
  if(name){

      const findByQuery = await Country.findAll({
        where : {
          name : {
            [Op.iLike] : '%'+name+'%'
          }
        }
      })
      findByQuery.length === 0 ? 
              res.status(404).send("pais no encontrado"):
              res.send(findByQuery)
  }else{
    res.status(404).send('query invalido o no se mando alguno')
  }
})

module.exports = router 