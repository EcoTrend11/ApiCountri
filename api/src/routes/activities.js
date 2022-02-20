const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { IdPaisSinActividad } = require("../auxiliar/auxiliar")


const router = Router();

router.get('/',  async (req, res) =>{
    const findActivity = await Activity.findAll()
    res.send(findActivity) 
  })

router.post('/addActivity', async (req, res)=>{

        const { name, level, duration, season} = req.body
        const countriId = req.body.countriId
        const actividad = await Activity.findOne({
          where : {name : name}
        })

        const promesaPaises = countriId.map(async(e) =>{

          const pais = await  Country.findByPk(e,{
            include : [{
              model :Activity,
              where : {name : name}
            }]
          })
          if(pais){
            return {
              resume: `pais con id:${e} ya tiene la actividad`,
              tieneActividad : true,
              IdDePais : e,
            }
          }else{
            return {
              resume: `pais con id:${e} un no tiene la actividad`,
              tieneActividad : false,
              IdDePais : e
            }
          }
        })
        const paises  = await  Promise.all(promesaPaises)

        // const paises = par (countriId)
        console.log(paises)

        const IdSinActividad = IdPaisSinActividad(paises)

        if(IdSinActividad.length === 0){
          res.send("todos los paises tienen esta actividad ")
        }
        if(IdSinActividad.length === 1){
          if(actividad ==! null){
            await actividad.addCountry(IdSinActividad[0])
          }
          if(actividad === null){
            const createActivity = await Activity.create({
              name : name,
              level : level,
              duration : duration,
              season : season
            })
            await createActivity.addCountry(IdSinActividad[0])
          }
          res.send(`actividad: ${name}, agregada correctamente al pais de id:${IdSinActividad}`)
        }
        if(IdSinActividad.length > 1){
          if(actividad !==null){
            actividad.addCountries(IdSinActividad)
          }
          if(actividad === null){
            const createActivity = await Activity.create({
              name : name,
              level : level,
              duration : duration,
              season : season
            })
            await createActivity.addCountries(IdSinActividad)
          }
        }

}) 


module.exports = router