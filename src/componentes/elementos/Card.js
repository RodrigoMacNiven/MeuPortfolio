import styles from './Card.module.css'
import ButtonA from './ButtonA';

export default function Card({img,title, text, site, github}){
    return (
        <div className={styles.card} id='Card'>
            <a href={site}>
                <picture>
                    <source srcSet={img} media="(max-width:767px)" />
                    <img src={img} alt="ERROR" width='349' height='196' />
                </picture>
            </a>
            <h4>{title}</h4>
            <p>{text}</p>
            <ButtonA link={github} id='buttoncard' text='Clique aqui'/>
        </div>
    )
}