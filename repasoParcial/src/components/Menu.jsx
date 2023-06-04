import { useState } from "react"


function Menu({ agregarPedido }) {
    const [item, setItem] = useState('')

    function handleSubmit (e) {
        console.log("mildis me estas ejecutandoo");
        e.preventDefault()
        if (!item) return 
            agregarPedido(item)
            setItem ('')
        return 
    }

  return (

    <div className="menu">
        <h2>Menu</h2>
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="pedido">Pedido:</label>
            <input type="text"
            id="pedido"
            value={item}
            onChange={(e) => setItem(e.target.value)} />
            <button type='submit'>Agregar al pedido</button>

        </form>
    </div>
  )
}


export default Menu