import styles from './CSS/Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Projetos'>Projetos</Nav.Link></li>
                <li><Nav.Link>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#Sobremim'>Sobre mim</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://github.com/RodrigoMacNiven/'><FaGithub size={25}/></a></li>
                <li><a href='https://www.linkedin.com/in/rodrigomacniven/'><FaLinkedin size={25}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar;