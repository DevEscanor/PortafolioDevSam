import './home.css'
import { Contact, Footer, Hero, Navbar, AcercaDe, Proyectos, Habilidades } from '../../components/';
import { ScrollTopButton } from '../../assets/';

export const Home = () => {
  return (
    <div className="landingContainer">
      <Navbar home={true} />
      <Hero />
      <AcercaDe />
      <Habilidades />
      <Proyectos />
      <Contact />
      <ScrollTopButton />
      <Footer />
    </div>
  )
};
