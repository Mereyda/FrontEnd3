import styles from './Item.module.css'



// Crea un componente Item que renderice un li y que reciba una prop children


export function Item(props) {
    return <li className={styles.item}>{props.children}</li>
}


export default Item