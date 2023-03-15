import { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import { DiDotnet } from 'react-icons/di';
import { GoDatabase } from 'react-icons/go';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { IoInfiniteSharp } from 'react-icons/io5';
import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact, FaGitAlt, FaNodeJs, /*FaDatabase,*/ FaDocker } from 'react-icons/fa';
import { SiAdonisjs, SiExpress, SiHeroku, SiJavascript, /*SiKubernetes,  SiMicrosoftaccess ,*/ SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiTypescript } from 'react-icons/si';
import './habilidades.css';

const icons = [
  <IoInfiniteSharp />,
  <FaGitAlt />,
  <AiFillGitlab />,
  <AiFillGithub />,
  <FaDocker />,
  <GoDatabase />,
  <SiMysql />,
  <SiPostgresql />,
  <SiMongodb />,
  <DiDotnet />,
  <SiJavascript />,
  <SiTypescript />,
  <FaNodeJs />,
  <SiExpress />,
  <SiAdonisjs />,
  <SiNestjs />,
  <FaReact />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaBootstrap />,
  <SiHeroku />,
]

const nameIcons = [
  "DevOps",
  "Git",
  "GitLab",
  "GitHub",
  "Docker Products",
  "Microsoft SQL Server",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Visual Basic",
  "Javascript",
  "Typescript",
  "NodeJs",
  "Express",
  "AdonisJs",
  "Nestjs",
  "React",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Heroku",
]

export const Habilidades = () => {
  const { t } = useTranslation();
  return (
    <section id='Habilidades' className='habContainer'>
      <div className='habWrapper'>
        <div className='leftSideHab'>
          <ListIcons />
        </div >
        <div className='rightSideHab'>
          <h2 className='habTitle'>
            {/* Stack de Tecnologías 
             dominadas */}
            {t("skills.title")}
          </h2>
        </div>
      </div >
    </section >
  )
}

const ListIcons = () => {
  const refItems = useRef(null);

  const [itemIsVisible, setItemIsVisible] = useState();
  // console.log(itemIsVisible)
  useEffect(() => {
    const { current } = refItems;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setItemIsVisible(entry.isIntersecting);
      // console.log('entry', entry)
    })
    observer.observe(current)
    return () => {
      observer.disconnect(current); // *** Use the same element
    }
  }, [])

  const handleItems = () => {

  }

  return (
    <ul ref={refItems} className='habList'>
      {
        icons.map((item, index) => (
          <li key={index} className={`habItem ${itemIsVisible ? 'show' : 'hidenLeft'}`}>
            <span className='iconItem' onScroll={handleItems}>
              {item}
            </span>
            <span className='nameItem'>
              {nameIcons[index]}
            </span>
          </li>
        ))
      }
    </ul>
  )
}
