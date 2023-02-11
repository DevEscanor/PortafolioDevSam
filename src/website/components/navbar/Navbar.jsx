import './navbar.css'
import logo from '../../media/images/logoDavi.png'
import { Link } from 'react-scroll';
import { useState } from 'react';
import LanguageBTNs from '../../layout/LanguageBTNs';
import { useTranslation } from "react-i18next";

/*
const links = [
  'Acerca de',
  'Habilidades',
  'Proyectos',
]
*/

function LinkItems({ estadoMiniMenu, cerrarMenu }) {

  const { t } = useTranslation();

  const handle = () => {
    cerrarMenu()
  }

  return (
    <ul className={estadoMiniMenu ? 'navbarList' : 'navbarListNone'}>
      <li className='navbarItems'  >
        <Link to="AcercaDe" smooth={true} onClick={handle}>
          {t("navbar.navlink1")}
        </Link>
      </li>
      <li className='navbarItems'  >
        <Link to="Habilidades" smooth={true} onClick={handle}>
          {t("navbar.navlink2")}
        </Link>
      </li>
      <li className='navbarItems'  >
        <Link to="Proyectos" smooth={true} onClick={handle}>
          {t("navbar.navlink3")}
        </Link>
      </li>
        <LanguageBTNs onClick={handle} />
      <Link to='Contactanos' smooth={true} onClick={handle}>
        <li className='navbarItems navbarBtn'>
          {t("navbar.navlink4")}
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
