const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const router = Router();

router.get('/',  async (req, res) =>{
  const findCountry = await Country.findAll()
  res.send(findCountry)
})

router.get('/byId/:id',async (req, res)=>{
  const id = req.params.id
  const findCountryById = await Country.findByPk(id,({
    include: Activity
  }))
    if(findCountryById !==null){
      res.send(findCountryById)
    }else{
      res.status(500).send("pais no encontrado con esa id")
    }
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
      res.send(findByQuery)
  }else{
    res.status(500).send('no mando query alguno')
  }
})

module.exports = router 