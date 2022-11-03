import { DiDotnet } from 'react-icons/di';
import { GoDatabase } from 'react-icons/go';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { IoInfiniteSharp } from 'react-icons/io5';
import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact, FaGitAlt, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiAdonisjs, SiExpress, SiHeroku, SiJavascript, SiMicrosoftaccess, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiTypescript } from 'react-icons/si';
import './habilidades.css';

const icons = [
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
  <IoInfiniteSharp />,
  <FaNodeJs />,
  <SiExpress />,
  <SiNestjs />,
  <SiAdonisjs />,
  <SiHeroku />,
  <FaDatabase />,
  <GoDatabase />,
  <SiMongodb />,
  <SiPostgresql />,
  <SiMysql />,
  <FaDocker />
]

const nameIcons = [
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
  "DevOps",
  "NodeJs",
  "Express",
  "SiNestjs",
  "AdonisJs",
  "Heroku",
  "Relational Databases",
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
  return (
    <ul className='habList'>
      {
        icons.map((item, index) => (
          <li key={index} className='habItem '>
            <span className='iconItem'>
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
