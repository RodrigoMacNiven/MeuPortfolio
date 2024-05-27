import styles from './CSS/Presentation.module.css'
import ButtonA from '../elementos/ButtonA';
import { useEffect, useState } from 'react';

function Presentation(){

    const [text,setText] = useState('');
    const toRotate = ['Rodrigo Machado', 'Desenvolvedor Full Stack', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text]);

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <h1>Olá, eu sou {text}</h1>
            <p>Apaixonado por tudo que envolve lógica, conheci <br/>a programação ainda no segundo grau aos 15 anos!<br/>
            Comecei aprendendo com Pascal ainda na folha de papel!<br/> Depois disso, passamos para Java e Delphi e introdução ao web design com HTML e CSS. <br/>
            Alguns anos depois, já na faculdade, voltei a visitar a maioria <br/> dessas linguagens, além de ter contato com C, C++ e alguns bancos de dados!<br/>
            Atualmente focado em migrar para ⁣a área de Fullstack, estou focando no momento na parte de Front-end. 
            </p>
            <ButtonA text='Saber mais'/>
        </div>
    )
}

export default Presentation;