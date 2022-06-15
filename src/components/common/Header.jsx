import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const changeToDark = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  };

  const changeToLight = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setIsDark(false);
  };

  useEffect(() => {
    if (localStorage.getItem('theme') !== 'dark') {
      changeToLight();
    } else {
      changeToDark();
    }
  }, []);

  const changeTheme = () => {
    isDark === true ? changeToLight() : changeToDark();
  };

  return (
    <header className=" bg-elements-lt shadow-lg dark:bg-elements-dk">
      <div className=" mx-auto flex max-w-[1440px] justify-between px-4 py-6 md:px-12">
        <h1 className="text-lg font-extrabold md:text-2xl">Where in the world?</h1>
        <button
          className="text-xs font-semibold md:mr-4 md:text-sm"
          type="button"
          onClick={changeTheme}
        >
          {whichIcon()}
        </button>
      </div>
    </header>
  );
};


const whichIcon = () => {
  return (
    <>
      {document.documentElement.classList.contains('dark') ? (
        <>
          <FontAwesomeIcon icon={faSun} className="mr-2" />
          Light mode
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} className="mr-2" />
          Dark mode
        </>
      )}
    </>
  )
}

