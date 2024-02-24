import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <GetStarted/>
      <Footer/>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
