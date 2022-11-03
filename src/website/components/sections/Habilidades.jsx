import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { IoInfiniteSharp } from 'react-icons/io5';
import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiAdonisjs, SiExpress, SiHeroku, SiJavascript, SiMicrosoftaccess, SiMysql, SiPostgresql } from 'react-icons/si';
import './habilidades.css';

const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiJavascript />,
  <FaBootstrap />,
  <FaReact />,
  <FaGitAlt />,
  <AiFillGitlab />,
  <AiFillGithub />,
  <IoInfiniteSharp />,
  <FaNodeJs />,
  <SiExpress />,
  <SiAdonisjs />,
  <SiHeroku />,
  <FaDatabase />,
  <SiMicrosoftaccess />,
  <SiPostgresql />,
  <SiMysql />,
]

const nameIcons = [
  "HTML5",
  "CSS3",
  "Javascript",
  "Bootstrap",
  "React",
  "Git",
  "GitLab",
  "GitHub",
  "DevOps",
  "NodeJs",
  "Express",
  "AdonisJs",
  "Heroku",
  "Relational Databases",
  "Microsoft SQL Server",
  "PostgreSQL",
  "MySQL",
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
