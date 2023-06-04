
import styles from './Card.module.css'


function Card ({ cancion, artista, array, setArray}){

  const handleEliminar = (id) => {
    const newArray = array.filter((valor)=>valor.id !== id)
    setArray(newArray)
}
    
  return(
      <div className={styles.form}>
          {array.map((item)=> (
          
          <ul className={styles.list} key={item.id}>
          <h2>tarjeta de musica</h2>
          <p>El artista ingresado es: {item.artista}</p>
          <p>La cancion que ingresaste es: {item.cancion}</p>            
          <button onClick={()=>handleEliminar(item.id)}> ELIMINAR </button>
          </ul>
          ))}
      </div>

  )
}

export default Card

