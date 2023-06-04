import './App.css'
import { Card } from "./assets/components/Card";
import Saludo from "./assets/components/Saludo"

function App() {
  return (
   <>
   <div className='playground'>
      <Saludo nombre = "mere" apellido="Garcia">,soy la tarea del playground</Saludo>
   </div>
   
    <Card> Card Children 1</Card>
    <Card title="Card Title 2">Card Children 2</Card>
    <Card footer ="Card Footer 3">Card Children 3</Card>
    <Card title="Card Title 4" footer="card Footer 4"> Card Children 4</Card>
   </>
    
  )
}

export default App;
