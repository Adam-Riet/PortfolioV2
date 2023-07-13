import './styles/styles.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PortfolioContainer from './components/PortfolioContainer';


function App() {
  return (
    <div className="App">
    <Header />
    <PortfolioContainer />
    <div className="FooterWrapper">
      <Footer />
    </div>
  </div>
    
  );
}

export default App;

