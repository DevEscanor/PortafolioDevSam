import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './themeToggle.css';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={handleClick}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
    </button>
  );
}; 