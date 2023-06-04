

function Card ({ cancion, artista, array, setArray}){

    const handleEliminar = (id) => {
        const newArray = array.filter((valor)=>valor.id !== id)
        setArray(newArray)
    }

    return(
        <div>
            {array.map((item)=> (
            
            <li key={item.id}>
            <h2>Music Card</h2>
            <p>El artista ingresado es: {item.artista}</p>
            <p>La cancion que ingresaste es: {item.cancion}</p>            
            <button onClick={()=>handleEliminar(item.id)}> ELIMINAR </button>
            </li>
            ))}
        </div>

    )

}
export default Card