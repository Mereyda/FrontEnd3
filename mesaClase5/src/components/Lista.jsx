import styles from './Lista.module.css'


// Crea un componente Lista que renderice un ul y que reciba una prop children

export function Lista(props) {
    return <ul className={styles.lista}>{props.children}</ul>
}



export default Lista