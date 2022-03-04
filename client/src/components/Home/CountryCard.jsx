import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../Loading/Loading";


const CountryCard = ({countries})=>{
    console.log( countries)

    if(countries.length===0){
        return <Loading/>
    }
    else{
        return(
            <ul>
            {countries.map((e,index) => (
                    <li key={index}>
                        <Link to={'/countryDetail/' + e.id} >
                            <img
                                width={250} 
                                height={150}  
                                src={e.flags}
                                alt="img not found"                  
                            />
                            <div>Nombre: {e.name}</div>
                            <div>Continente: {e.region}</div>            
                        </Link>
                    </li>
            ) )}
            </ul>
        )
    }
}



export default CountryCard