const  IdPaisConActividad = (paises) => {
    let IdPaises =  paises.map((e)=> {
        if(e.tieneActividad === true){
         return e.IdDePais
        }
    })

   return IdPaises = IdPaises.filter(e => e !== undefined)
}


module.exports = {IdPaisConActividad };