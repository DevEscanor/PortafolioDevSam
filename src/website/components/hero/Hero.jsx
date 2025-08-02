import './hero.css'
import { Link } from 'react-scroll'
import heroImg from '../../media/images/daviHero.png'
import { IoIosArrowDown } from 'react-icons/io'
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id='Hero' className='heroContainer'>
      <div className='heroWrapper'>
        <div className='profilePhoto'>
          <img src={heroImg} className='heroPhoto' alt='David Samuel' />
        </div>
        <div className='heroText'>
          <h1 className='heroH1'>
            DevSuarez
          </h1>
          <h2 className='heroH2'>
            {t("hero.title")}
          </h2>
          <h3 className='heroH3'>
            {t("hero.subTitle")}
          </h3>
          <h4 className='heroH4'>
            {t("hero.subTitle2")}
          </h4>
        </div>
        <Link to='AcercaDe' smooth={true} duration={200} offset={-70} className='linkSvg' >
          <IoIosArrowDown className='arrowSvg' />
        </Link>
      </div>
    </section>
  )
};
