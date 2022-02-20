const  IdPaisSinActividad = (paises) => {
    let IdPaises =  paises.map((e)=> {
        if(e.tieneActividad === false){
         return e.IdDePais
        }
    })

   return IdPaises = IdPaises.filter(e => e !== undefined)
}


// const par = async (countriId) =>{
//     const promesaPaises = countriId.map(async(e) =>{

//         const pais = await  Country.findByPk(e,{
//           include : [{
//             model :Activity,
//             where : {name : name}
//           }]
//         })
//         if(pais){
//           return {
//             resume: `pais con id:${e} ya tiene la actividad`,
//             tieneActividad : true,
//             IdDePais : e,
//           }
//         }else{
//           return {
//             resume: `pais con id:${e} un no tiene la actividad`,
//             tieneActividad : false,
//             IdDePais : e
//           }
//         }
//       })
//       const paises  = await  Promise.all(promesaPaises)
//       return paises
// }



module.exports = {IdPaisSinActividad };