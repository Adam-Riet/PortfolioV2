import './styles/styles.css';
import './components/Navbar.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Project from './components/Project.js';
import About from './components/About';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    
    </div>
    
  );
}

export default App;
