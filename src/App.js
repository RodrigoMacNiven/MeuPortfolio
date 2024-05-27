import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Projetos from './componentes/section/Projetos';
import Sobremim from './componentes/section/Sobremim';
import Footer from './componentes/section/Footer';


function App() {

  return (
    <div className="App">
        <Navbar/>
        <Presentation/>
        <Projetos/>
        <Sobremim/>
        <Footer/>
    </div>
  );
}

export default App;
