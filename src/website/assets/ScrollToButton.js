import React, { useState } from "react";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import './scrollTo.css';

export const ScrollTopButton = () => {

  const [color, setColor] = useState(false)
  const aparecerUP = () => {
    if (window.scrollY >= 300) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', aparecerUP)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className={color ? 'scrollTopButton' : 'scrollNone'}>
      <BsFillArrowUpSquareFill
        onClick={scrollTop}
      />
    </div>
  );
};
