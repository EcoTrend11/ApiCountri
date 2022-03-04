const SeasonSelector = ({prueba}) =>{
    
    function onChange (e){
        let value = e.target.value
        prueba.season= value
    }
    
    
    
    return(
        <div>
            <select onChange={onChange}>
                <option value="">--SELECT SEASON--</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Autumn">Autumn</option>
                <option value="Spring">Spring</option>
            </select>
        </div>
    )
}

export default SeasonSelector