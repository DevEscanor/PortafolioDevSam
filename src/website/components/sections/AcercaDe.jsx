import { useEffect, useRef, useState } from 'react';
import './acercade.css';
import sectionOneIMG from '../../media/images/pc-icon.png'
import { useTranslation } from "react-i18next";

export const AcercaDe = () => {
  const { t } = useTranslation();
  const refCard = useRef(null);

  const [cardIsVisible, setCardIsVisible] = useState();
  useEffect(() => {
    const { current } = refCard;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCardIsVisible(entry.isIntersecting);
      // console.log('entry', entry)
    })
    observer.observe(current)
    return () => {
      observer.disconnect(current); // *** Use the same element
    }
  }, [])

  return (
    <section id='AcercaDe' className='sectionOneContainer'>
      <div className='sectionOneWrapper' >
        <div ref={refCard} className={`leftSideSectionOne ${cardIsVisible ? 'show' : 'hidenLeft'}`}>
          <h2 className='h2SectionOne'>
            {/* Hola, soy */}
          {t("about.text1")}
          </h2>
          <h1 className='h1SectionOne' >
            David Suarez
          </h1>
          <p className='parSectionOne'>
          {t("about.text2")}
            {/* Soy un informático emprendedor y amante de la tecnología. */}
          </p>
          <br />
          <p className='parSectionOne'>
          
           {t("about.text3")} {/* He trabajado desde 2019 como Arquitecto y desarrollador de Software de la empresa */} <a href='http://www.arcadiusnic.com/' target='_blank' rel="noreferrer"><span className='arcadius'>ARCADIUS</span></a> {t("about.text4")}{/* del cual soy
            Co-Fundador. */}
          </p>
          <br />
          <p className='parSectionOne'>
          {t("about.text5")}
            {/* Mis principales competencias son la arquitectura de proyectos y el desarrollo de software centrado sobre todo en aplicaciones de Node.js. */}
          </p>
          <br />
          <p className='parSectionOne'>
          {t("about.text6")}
            {/* Gran parte de mi carrera profesional ha estado dedicada al software orientado a Microfinanzas, también realizo estas mismas labores aplicadas al diseño y desarrollo de Backend / Frontend. */}
          </p>
        </div>
        <div className={`rightSideSectionOne ${cardIsVisible ? 'show' : 'hidenRight'}`}>
          <img src={sectionOneIMG} alt='' className='rightSideIMGSectionOne' />
        </div>
      </div>
    </section>
  )
};
