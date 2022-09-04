import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Destinations from './Destinations';
import Search from './Search'
import Selects from './Selects';
import Carousel from './Carousel';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carousel/>
  <Footer/>
    </div>
  );
}

export default App;
