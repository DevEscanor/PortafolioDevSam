import { useEffect, useRef, useState } from 'react';
import { DiDotnet } from 'react-icons/di';
import { GoDatabase } from 'react-icons/go';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { IoInfiniteSharp } from 'react-icons/io5';
import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact, FaGitAlt, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiAdonisjs, SiExpress, SiHeroku, SiJavascript, SiMicrosoftaccess, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiTypescript } from 'react-icons/si';
import './habilidades.css';

const icons = [
  <IoInfiniteSharp />,
  <FaDatabase />,
  <FaNodeJs />,
  <DiDotnet />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaBootstrap />,
  <FaGitAlt />,
  <AiFillGitlab />,
  <AiFillGithub />,
  <SiExpress />,
  <SiNestjs />,
  <SiAdonisjs />,
  <SiHeroku />,
  <GoDatabase />,
  <SiMongodb />,
  <SiPostgresql />,
  <SiMysql />,
  <FaDocker />
]

const nameIcons = [
  "DevOps",
  "Relational Databases",
  "NodeJs",
  "Visual Basic",
  "HTML5",
  "CSS3",
  "Javascript",
  "Typescript",
  "React",
  "Bootstrap",
  "Git",
  "GitLab",
  "GitHub",
  "Express",
  "Nestjs",
  "AdonisJs",
  "Heroku",
  "Microsoft SQL Server",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Docker Products",
]

export const Habilidades = () => {
  return (
    <section id='Habilidades' className='habContainer'>
      <div className='habWrapper'>
        <div className='leftSideHab'>
          <ListIcons />
        </div >
        <div className='rightSideHab'>
          <h2 className='habTitle'>
            Stack de Tecnologías
            dominadas
          </h2>
        </div>
      </div >
    </section >
  )
}

const ListIcons = () => {
  const refItems = useRef(null);

  const [itemIsVisible, setItemIsVisible] = useState();
  console.log(itemIsVisible)
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
