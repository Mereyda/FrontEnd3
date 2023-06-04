import { useState } from 'react'
import { Calculadora} from "./components/Calculadora"

import './App.css'

function App() {
  const [sum, setSum] = useState(0)

  const sumarTotales = valor => {
    setSum (valor + sum)
  }
//   const igual = (valor) =>{
//     console.log(valor);
// }

  return (
    <>
    
      <Calculadora amount = {5} onEqual ={sumarTotales}></Calculadora>
      <Calculadora amount = {1} onEqual={sumarTotales}></Calculadora>
      <Calculadora amount = {13} onEqual={sumarTotales}></Calculadora>


    </>
  )
}

export default App
