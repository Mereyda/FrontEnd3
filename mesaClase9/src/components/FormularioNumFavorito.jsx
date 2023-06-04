import { useState } from "react";
let autoId = 0;

export function FormularioNumFavorito() {
  const [numero, setNumero] = useState(0);
  const [usuario, setUusario] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [valores, setValores] = useState([]);

  const validateNumber = (numero) => {
    return numero > 0 ? true : false;
  };

  const validateUser = (usuario) => {
    return usuario.length > 0 ? true : false;
  };

  const handleSubmit = (e) => {
    console.log('soy la funcion handleSubmit');
    e.preventDefault();
    if (!validateUser(usuario)) {
      setMensajeError("ERROR, el nombre de usuario no puede estar vacio");
    } else if (!validateNumber(numero)) {
      setMensajeError("ERROR, el numero ingresado debe ser mayor a 0");
    } else {
      setValores([...valores, { usuario, numero, id: autoId++ }]);
      setUusario("");
      setNumero('');
      setMensajeError("");
    }
  };

  return (
    <>
      <section>
        <h1>Ingresa tu numero favorito 🔢</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUusario(e.target.value)}
            />
          </label>
          <br />
          <label> numero favorito
            <input
             type="number"
             value={numero}
             onChange={(event) => setNumero(event.target.value)} 
             />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
        {mensajeError && <p className="parrafo">{mensajeError}</p>}
        <h3>Valores ingresados:</h3>
        <ul className='flex gap-16'>
          {valores.map((valor) => (
            <li className="card" key={valor.id}>
              <p>Nombre: {valor.usuario}</p>
              <p>Numero favorito: {valor.numero}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default FormularioNumFavorito;
