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
          <p className='parSectionOne'>
          {t("about.text2")}
          </p>
          <br />
          <p className='parSectionOne'>
          
           {t("about.text3")} 
          </p>
          <br />
          <p className='parSectionOne'>
          {t("about.text4")}
          </p>
         
        </div>
        <div className={`rightSideSectionOne ${cardIsVisible ? 'show' : 'hidenRight'}`}>
          <img src={sectionOneIMG} alt='' className='rightSideIMGSectionOne' />
        </div>
      </div>
    </section>
  )
};
