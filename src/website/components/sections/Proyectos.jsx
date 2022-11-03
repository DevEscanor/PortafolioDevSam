import { cardsProjects } from '../../assets/cards'
import './proyectos.css';

// const proyectos = [
//   'Proyectos ',
//   'Proyectos ',
//   'Proyectos ',
//   'Proyectos ',
//   'Proyectos ',
//   'Proyectos ',
// ];

export const Proyectos = () => {
  return (
    <section id='Proyectos' className='Section2Container'>
      <p className='habTitle2'>
        Proyectos
      </p>
      <div className='movingTitleContainer'>
        {/*
        proyectos.map(item => (
          <p className='movingTitle'>
            {item}
          </p>
        ))
      */}
      </div>
      <div className='Section2Wrapper'>
        {cardsProjects.slice(0).map(cardTwo => (
          <a href={cardTwo.url} className="linkCard" target="_blank" rel="noreferrer" key={cardTwo.id * 9999}>
            <div className='section2CardsContainer' >
              <img src={cardTwo.img} alt={cardTwo.title} className='section2IMG' />
              <div key={cardTwo.id} className='section2CardTexts'>
                <h3 className='section2CardTitle'>
                  {cardTwo.title}
                </h3>
                <p className='section2CardDesc'>
                  {cardTwo.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
};
