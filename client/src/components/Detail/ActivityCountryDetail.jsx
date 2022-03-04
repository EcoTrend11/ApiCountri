const ActivityCountryDetail = ({e}) =>{
    return (
        <ul>
            <li>Nombre: {e.name}</li>
            <li>Nivel: {e.level}</li>
            <li>Duracion: {e.duration}</li>
            <li>Season: {e.season}</li>
        </ul>
    )
}

export default ActivityCountryDetail