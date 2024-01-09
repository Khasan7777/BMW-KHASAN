
import './App.css';
import Cards from './components/Cards/Cards';
import Display from './components/Display/Display';
import Hero from './components/Navbar/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Hero/>
      <Showcase/>
      <Display/>
      <Cards/>

      
    </div>
 
      


        );


}

export default App;
