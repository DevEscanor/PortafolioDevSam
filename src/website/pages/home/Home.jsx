import './home.css'
import { Contact, Footer, Hero, Navbar, AcercaDe, Proyectos, Habilidades, ScrollIndicator, Legal } from '../../components/';
import { ScrollTopButton } from '../../assets/';
import { useScrollSnap } from '../../../hooks/useScrollSnap';
import { useAnalytics } from '../../../hooks/useAnalytics';

export const Home = () => {
  useScrollSnap();
  const { trackSectionView } = useAnalytics();

  // Track section views when they come into viewport
  const handleSectionView = (sectionName) => {
    trackSectionView(sectionName);
  };

  return (
    <div className="landingContainer">
      <Navbar home={true} />
      <ScrollIndicator />
      <Hero />
      <div onMouseEnter={() => handleSectionView('about')}>
        <AcercaDe />
      </div>
      <div onMouseEnter={() => handleSectionView('skills')}>
        <Habilidades />
      </div>
      <div onMouseEnter={() => handleSectionView('projects')}>
        <Proyectos />
      </div>
      <div onMouseEnter={() => handleSectionView('contact')}>
        <Contact />
      </div>
      <Footer />
      <ScrollTopButton />
      <Legal />
    </div>
  )
};
