const LevelSelection = ({prueba}) =>{
    
    function onSelect(e){
        let value = e.target.value
        prueba.level= value
    }
    

    
    return(
        <div>
            <select onChange={onSelect}>
                <option value="">--SELECT LEVEL--</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
    )
}

export default LevelSelection