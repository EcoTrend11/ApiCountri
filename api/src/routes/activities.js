const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { IdPaisSinActividad } = require("../auxiliar/IdPaisSinActividad")
const { IdPaisConActividad } = require("../auxiliar/IdPaisConActividad")


const router = Router();

router.get('/',  async (req, res) =>{
    const findActivity = await Activity.findAll({
      include : Country
    })
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
        const IdConActividad = IdPaisConActividad(paises)
        const IdSinActividad = IdPaisSinActividad(paises)


        if(IdSinActividad.length === 0){
          countriId.length === 1 ?
              res.send(`el pais ya tiene la actividad ${name} `):
              res.send(`todos los paises tienen la actividad ${name} `)
        }
        if(IdSinActividad.length === 1){
          if(actividad !== null){
            await actividad.addCountry(IdSinActividad[0])
            
            IdConActividad.length === 0 ?
                res.send(`actividad creada en el pais de id: ${IdSinActividad[0]}`):
                res.send(`actividad creada en el pais de id: ${IdSinActividad[0]},
                          pais(es) con id: ${IdConActividad} ya tenian la actividad`)
          }
          if(actividad === null){
            const createActivity = await Activity.create({
              name : name,
              level : level,
              duration : duration,
              season : season
            })
            await createActivity.addCountry(IdSinActividad[0])
            
            IdConActividad.length === 0 ?
            res.send(`actividad creada en el pais de id: ${IdSinActividad[0]}`):
            res.send(`actividad creada en el pais de id: ${IdSinActividad[0]},
                      pais(es) con id: ${IdConActividad} ya tenian la actividad`)
          }
        }
        if(IdSinActividad.length > 1){
          if(actividad !==null){
            actividad.addCountries(IdSinActividad)
            
            IdConActividad.length === 0 ?
            res.send(`actividad creada en el pais de id: ${IdSinActividad}`):
            res.send(`actividad creada en el pais de id: ${IdSinActividad},
                      pais(es) con id: ${IdConActividad} ya tenian la actividad`)
          }
          if(actividad === null){
            const createActivity = await Activity.create({
              name : name,
              level : level,
              duration : duration,
              season : season
            })
            await createActivity.addCountries(IdSinActividad)

            IdConActividad.length === 0 ?
            res.send(`actividad creada en el pais de id: ${IdSinActividad}`):
            res.send(`actividad creada en el pais de id: ${IdSinActividad},
                      pais(es) con id: ${IdConActividad} ya tenian la actividad`)
          }
        }

}) 


module.exports = router