import { FaFigma, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./CSS/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <div className={styles.interno}>
            <p>Meu contato:</p>
            <p>(24) 99818-1012</p>
            </div>
            <div className={styles.interno}>
            <p>E-mail:</p>
            <p>rodrigololz@hotmail.com</p>
            </div>
            <div className={styles.interno2}>
                <ul>
                    <li><a href="https://github.com/RodrigoMacNiven" aria-label="Link do Github"><FaGithub size={40}/></a></li>
                    <li><a href="https://www.linkedin.com/in/rodrigomacniven/" aria-label="Link do meu linkdin"><FaLinkedin size={40}/></a></li>
                    <li>
                        <a 
                            href="https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?type=design&node-id=0%3A1&mode=design&t=Hpl7aIhWt0vdutHj-1"
                            aria-label="figma dessa pagina"
                            ><FaFigma size={40}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  )
}