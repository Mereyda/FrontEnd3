
import './App.css'
import { CardsProductos} from "./components/Cardsproductos"
import { CardUsers} from "./components/CardUsers"
import { CardsAccounts } from "./components/CardsAccounts"


function App() {
    
    function handlerClick(id){
        console.log(`agregando el producto con id ${id}`);
    }
    return (
        <>
            <CardsProductos></CardsProductos>
            <CardsAccounts></CardsAccounts>
            <CardUsers></CardUsers>
        </>
    )
}

export default App
