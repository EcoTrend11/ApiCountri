const InputDuration = ({prueba}) =>{
    function onChange(e){
        let value = e.target.value
        prueba.duration = value
    }

    return(
        <div>
            <label>duration :  </label>
            <input type="text"placeholder="duration" onChange={onChange} />
        </div>
    )
}  

export default InputDuration