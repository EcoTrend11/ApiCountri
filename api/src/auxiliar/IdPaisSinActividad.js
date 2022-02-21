const  IdPaisSinActividad = (paises) => {
    let IdPaises =  paises.map((e)=> {
        if(e.tieneActividad === false){
         return e.IdDePais
        }
    })

   return IdPaises = IdPaises.filter(e => e !== undefined)
}


module.exports = {IdPaisSinActividad };