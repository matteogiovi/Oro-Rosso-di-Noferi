import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import Storia from './components/Storia';
import Territorio from './components/Territorio';
import Produzione from './components/Produzione';
import Qualita from './components/Qualita';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Storia />
      <Territorio />
      <Produzione />
      <Qualita />
      <Contatti />
      <Footer />
    </>
  );
}
