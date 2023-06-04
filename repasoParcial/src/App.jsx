import { useState } from "react";
import Pedido from "./components/Pedido";
import Menu from "./components/Menu";
import "./App.css";
let id = 0;
function App() {
  const [pedido, setPedido] = useState([]);

  function getId() {
    return id++;
  }

  function agregarPedido(item) {
    const newPedido = {
      id: getId(),
      item,
    };
    setPedido([...pedido, newPedido]);
  }

  function deletePedido(id) {
    const borrar = pedido.filter((ped) => ped.id !== id);
    setPedido(borrar);
  }

  return (
    <>
      <div className="pedidos3">
        <Menu agregarPedido={agregarPedido} />
        <li>
          {pedido.map((eliminarPedido) => {
            return (
              <Pedido
                key={eliminarPedido.id}
                pedido={eliminarPedido.item}
                deletePedido={() => deletePedido(eliminarPedido.id)}
              />
            );
          })}
        </li>
      </div>
    </>
  );
}
export default App;
