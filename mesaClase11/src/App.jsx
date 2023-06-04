import { useState } from 'react'
import Card from './components/Card.jsx'


import './App.css'
let autoId = 0;

function App() {
  const [cancion, setCancion] = useState('')
  const [artista, setArtista] = useState('')
  const [error, setError] = useState('')
  const [array, setArray] = useState([])


  const handleChangeArtista = (e) => {
    setArtista(e.target.value)
  }

  const handleCancion = (e) => {
    setCancion(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('mildiiiis')
    if(artista.trim().length < 3 || artista.trim()===''){
      setError('verifica el artista ingredasa')
      return
    }
    if(cancion.trim().length < 6){
      setError('la cancion es corta')
      return
    }
    else{
      setArray([...array, {artista, cancion, id:autoId++}])
      setArtista('')
      setCancion('')
      setError('')
    }
  }

  return (
    <>
    <section className='cardForm'>
      <h2>Formulario de Mere</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <label htmlFor="artista">Artista</label>
          <input 
          type="text"
          id='artista'
          value={artista}
          onChange={handleChangeArtista}
           />
        </ul>
        <ul>
          <label htmlFor="cancion">Canciones</label>
          <input 
          type="text"
          id='cancion'
          value={cancion}
          onChange={handleCancion}
           />
        </ul>
        <button type='submit'>Enviar</button>
      </form>
      {/* {error && <p>{error}</p>}
        <Card
         array={array} setArray={setArray} /> */}


         {error ? <p style={{ color: "red", fontWeight: "bold" }} >{error}</p> : <Card array={array} setArray={setArray}/>}
      
    
    </section>
    </>
  )
 
}

export default App

// {error ? <p>{error}</p> : <Card array = {array} setArray={setArray}/>}