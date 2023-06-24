import { useState, useEffect } from 'react';

import { Menu } from './styled';
import { MenuList } from '../MenuList';


export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClickable, setIsMenuClickable] = useState(true);

  const handleMobileMenu = () => {
    if (!isMenuClickable) {
      return;
    }

    

    const barsList = [...document.querySelectorAll('.menuMobileBars')];
    if (!isMenuOpen) {
      barsList.forEach((bar, idx) => {
        if (idx === 0) {
          bar.style.cssText = `transform: rotate(-50deg); margin-top:0px; transition: 0.6s; width: 130%`;
        } else if (idx === 1) {
          bar.style.display = 'none';
        } else if (idx === 2) {
          bar.style.cssText = `transform: rotate(50deg); margin-top: -10px; transition: 0.6s; width: 130%`;
        }
      });
      setIsMenuOpen(true);
      setIsMenuClickable(false);
    } else {
      removeCheese()
      setIsMenuOpen(false);
      setIsMenuClickable(false);
    }
  };
  const removeCheese = () =>{
    const barsList = [...document.querySelectorAll('.menuMobileBars')];
    barsList.forEach(async (bar, idx) => {
      if (idx === 0) {
        bar.style.cssText = `transform: rotate(0deg); transition: 0.6s; width: 100%`;
      } else if (idx === 1) {
        setTimeout(() => (bar.style.display = 'block'), 450);
      } else if (idx === 2) {
        bar.style.cssText = `transform: rotate(0deg); transition: 0.6s; width: 100%`;
      }
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuClickable(true);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, [isMenuClickable]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    removeCheese()
  };

  return (
    <>
      <Menu
        className={`menuMobileBtn ${isMenuOpen ? 'active' : ''}`}
        onClick={handleMobileMenu}
      >
        <span className="menuMobileBars"></span>
        <span className="menuMobileBars"></span>
        <span className="menuMobileBars"></span>
      </Menu>
      {isMenuOpen && <MenuList  closeMenu={closeMenu} />}
    </>
  );
};
