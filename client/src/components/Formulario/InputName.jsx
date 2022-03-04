const InputName = ({prueba}) =>{

    function onChange (e){
        let value = e.target.value
        console.log(value)
        prueba.name=value
    }

    return(
        <div>
            <label>Country name :  </label>
            <input type="text" placeholder="nombre de actividad" onChange={onChange} />
        </div>
    )
}

export default InputName