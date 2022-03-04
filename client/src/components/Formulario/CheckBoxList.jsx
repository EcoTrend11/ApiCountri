const CheckBoxList = ({countries , prueba}) => {


    let PaisSelecionado = []
    let ordenCountry =   countries.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

    
    function onChange (e){
        let isChecked = e.target.checked
        let value = e.target.value
        if(isChecked){
            PaisSelecionado.push(value)
        }
        else{
            PaisSelecionado = PaisSelecionado.filter(e => e !== value)
        }
        
        prueba.countriId=PaisSelecionado

        console.log(prueba)
    }
    


    return(
        <ul>
        {ordenCountry.map((e,index) => (
                <li key={index}>
                    <input type="checkbox" value={e.id}  onClick={(e)=> onChange(e)} ></input>
                    <label>{e.name}</label>
                </li>
        ) )}
        </ul>
    )
}

export default CheckBoxList