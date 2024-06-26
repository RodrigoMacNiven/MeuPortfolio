import styles from './ButtonA.module.css'

export default function ButtonA({text, link}){
    return (
        <div>
            <a href={link}>
                <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}