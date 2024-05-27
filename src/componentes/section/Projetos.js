import Card from '../elementos/Card'
import styles from './CSS/Projetos.module.css'
import ft1 from '../img/ft1.svg'
import ft2 from '../img/ft2.svg'
import ft3 from '../img/ft3.svg'
import ft4 from '../img/ft4.svg'

function Projetos(){
    return (
        <div className={styles.projetos1} id='Projetos'>
            <h1> Projetos </h1>
                <div className={styles.projetos}>
                    <Card
                    img  = {ft4}
                    title= {'Projeto com consumo de API'}
                    text = {'Projeto com consumo de API onde o usuário coloca a longitude e a latitude e descobre a temperatura e/ou coloca o cep e descobre os dados do endereço.'}
                    site = {'https://desafio2macniven.netlify.app/'}
                    github={'https://github.com/RodrigoMacNiven/Desafio2-ConsumoDeAPI'}
                    />         
                    <Card
                    img  = {ft3}
                    title= {'Projeto de uma landing page com contador regressivo'}
                    text = {'Uma landing page de um evento ou lançamento, com um contador regressivo que remete a uma chamada de ação.'}
                    site = {'https://ccxpteste.netlify.app/'}
                    github={'https://github.com/RodrigoMacNiven/CCXPTeste'}
                    />
                    <Card
                    img  = {ft2}
                    title= {'Segundo projeto de Landing Page'}
                    text = {'Uma landing page com uso de js, html e css.'}
                    site = {'https://bootcampdn-macniven.netlify.app/'}
                    github={'https://github.com/RodrigoMacNiven/Bootcamp'}
                    />
                     <Card
                    img  = {ft1}
                    title= {'Primeiro projeto de Landing Page'}
                    text = {'Primeiro projeto desenvolvido. Básicamente uma landing page feita com HTML e CSS'}
                    site = {'https://primeiralandingpagednc.netlify.app/'}
                    github={'https://github.com/RodrigoMacNiven/Landing_Page'}
                    />            
                </div>
        </div>
    )
}

export default Projetos;