import TimeCard from "../elementos/TimeCard";
import styles from "./CSS/Sobremim.module.css";

export default function Sobremim() {
  return (
    <section className={styles.sobremim} id='sobremim'>
      <h2>Sobre mim</h2>
      
      <div>
        <TimeCard
          ano = '2005'
          lineLeft = {false}
          ball = {true}
          lineRight = {true}
          texto = 'Me formei como Técnico de Informática no segundo grau com 17 anos. Entre as minhas matérias favoritas estavam lógica da programação e Webdesign.'
        />

        <TimeCard
          ano = '2007'
          lineLeft = {true}
          ball = {true}
          lineRight = {true}
          texto = 'Fiz um curso técnico de Programação Java no SENAI com total de 595 horas. Foi uma experiencia incrível e me levou de vez para o mundo da programação.'
        />

        <TimeCard
          ano = '2016'
          lineLeft = {true}
          ball = {true}
          lineRight = {true}
          texto = 'Concluí o Bacharelado em Sistema de Informação pela Universidade Estácio de Sá. Levei um tempo para concluir o curso, pois fazia um periodo e depois ficava 6 meses trabalhando embarcado.'
        />

        <TimeCard
          ano = '2019'
          lineLeft = {true}
          ball = {true}
          lineRight = {false}
          texto = 'Concluí um certificado III em Business pela Australian Pacific College e depois um certificado IV em Management'
        />
      </div>
    </section>
  )
}