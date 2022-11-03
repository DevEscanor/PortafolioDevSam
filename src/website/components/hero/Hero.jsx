import './hero.css'
import { Link } from 'react-scroll'
import heroImg from '../../media/images/daviHero.png'
import { IoIosArrowDown } from 'react-icons/io'

export const Hero = () => {
  return (
    <section id='Hero' className='heroContainer'>
      <div className='heroWrapper'>
        <div className='profilePhoto'>
          <img src={heroImg} className='heroPhoto' alt='David Samuel' />
        </div>
        <div className='heroText'>
          <h1 className='heroH1'>
            David Suarez
          </h1>
          <h2 className='heroH2'>
            FullStack Developer
          </h2>
          <h3 className='heroH3'>
            Co-Founder y CTO de Arcadius
          </h3>
        </div>
        <Link to='Acerca de' smooth={true} className='linkSvg' >
          <IoIosArrowDown className='arrowSvg' />
        </Link>
      </div>
    </section>
  )
};
