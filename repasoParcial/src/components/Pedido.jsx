
function Pedido(props) {
  console.log("holiiis");

return (
  <section className="container-pedido">
      <article>
          {props.pedido}
      </article>
      
      <button onClick={props.deletePedido}>Delete</button>

      


  </section>
)
}

export default Pedido