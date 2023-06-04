import products from '../assets/products.json/'

// function handlerClick(){
//     ondAddToCard(products.id)
// }

export function CardsProductos (){
    function handlerClick(){
        ondAddToCard(products.id)
    }
    return (
        <>
            <section>
                <h1>Productos disponibles</h1>
                {products.map(producto =>(
                    <div className='card' key={producto.id}>
                        <h2>{producto.nombre}</h2>
                        <p>ID: {producto.id}</p>
                        <p>Precio: {producto.precio}</p>
                        <p>Descripcion: {producto.descripcion}</p>
                        <button onClick={handlerClick}>Agregar al carrito</button>
                    </div>
                ))}
            </section>
        </>
    )
}

export default CardsProductos