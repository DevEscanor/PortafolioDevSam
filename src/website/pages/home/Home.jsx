import './home.css'
import { Contact, Footer, Hero, Navbar, AcercaDe, Proyectos, Habilidades, ScrollIndicator } from '../../components/';
import { ScrollTopButton } from '../../assets/';
import { useScrollSnap } from '../../../hooks/useScrollSnap';

export const Home = () => {
  useScrollSnap();

  return (
    <div className="landingContainer">
      <Navbar home={true} />
      <ScrollIndicator />
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
