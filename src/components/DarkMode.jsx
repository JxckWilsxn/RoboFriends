import React from 'react'
import { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
  const darkTheme = <MdDarkMode />;
  const lightTheme = <MdOutlineDarkMode />;
  
  const [isActive, setIsActive] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isActive) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    };

  }, [isActive]);

  return (
    <button  className='absolute pt-15 right-24 text-2xl text-black dark:text-white' 
      onClick={() => setIsActive(!isActive)}
      aria-label='Toggle Dark Mode'>

      {isActive ? lightTheme : darkTheme}
    </button>
  )
};

export default DarkMode;