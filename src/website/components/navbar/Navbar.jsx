import './navbar.css'
import logo from '../../media/images/logoDavi.png'
import { Link } from 'react-scroll';
import { useState } from 'react';

const links = [
  'Acerca de',
  'Habilidades',
  'Proyectos',
]

function LinkItems({ estadoMiniMenu, cerrarMenu }) {

  const handle = () => {
    cerrarMenu()
  }

  return (
    <ul className={estadoMiniMenu ? 'navbarList' : 'navbarListNone'}>
      {links.map(item => (
        <li className='navbarItems' key={item} >
          <Link to={item} smooth={true} onClick={handle}>
            {item}
          </Link>
        </li>
      ))}
      <Link to='Contactanos' smooth={true} onClick={handle}>
        <li className='navbarItems navbarBtn'>
          Contactame
        </li>
      </Link>
    </ul>
  )
}

export const Navbar = ({ home }) => {

  const [miniMenu, openMiniMenu] = useState(false)

  const handleMiniMenu = () => {
    openMiniMenu(!miniMenu);
  }

  const handleCerrarMiniMenu = () => {
    openMiniMenu(false)
  }

  return (
    <div className='navbarContainer'>
      <div className='navbarWrapper'>
        <Link to='Hero' smooth={true}>
          <img src={logo} alt='Arcadius logo' className='daviLogo' />
        </Link>
        <LinkItems
          estadoMiniMenu={miniMenu}
          cerrarMenu={handleCerrarMiniMenu}
        />
        <button
          onClick={handleMiniMenu}
          className={miniMenu ? 'miniMenuEquis' : 'miniMenu'}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  )
};
