import './footer.css'
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGitlab, AiOutlineMail } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer id="Footer" className='footer'>
      <ul className='footerList'>
        <li className='footerItem'>
          <a href='https://gitlab.com/ESCANORX' target='_blank' rel="noreferrer">
            <AiFillGitlab />
            <div className='footerSubItem'>
              {/* <span>Whatsapp</span> */}
              {/* +505 8836 9845 */}
            </div>
          </a>
        </li>
        <li className='footerItem'>
          <a href='mailto:david.suarez@arcadiusnic.com' target='_blank' rel="noreferrer">
            <AiOutlineMail />
            <div className='footerSubItem'>
              {/* <span>Email</span> */}
              {/* hollmann.valle@arcadiusnic.com */}
            </div>
          </a>
        </li>
        <li className='footerItem'>
          <a href='https://www.linkedin.com/in/david-samuel-suarez-montoya-242059150/' target='_blank' rel="noreferrer">
            <FaLinkedin />
            <div className='footerSubItem'>
              {/* <span>Email</span> */}
              {/* hollmann.valle@arcadiusnic.com */}
            </div>
          </a>
        </li>
      </ul>
      <p className='footerText'>
        Copyright © 2024 <span>David Suarez</span> | 
        <a 
          href="https://github.com/DevEscanor/PortafolioDevSam/blob/main/LICENSE" 
          target="_blank" 
          rel="noreferrer"
          className="license-link"
        >
          MIT License
        </a>
        | 
        <button 
          onClick={() => document.getElementById('legalModal').style.display = 'block'}
          className="legal-button"
        >
          Información Legal
        </button>
      </p>
    </footer>
  )
};
