import  { useState, useEffect } from 'react'; 

import { Logo } from '../../elements/Logo';
import { MenuList } from '../../elements/MenuList';
import { MobileMenu } from '../../elements/MobileMenu';
import { Container } from './styled';

export const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
        <Container>
            <div className='nav-container'>
                <Logo/>
                {windowWidth > 992 ?  <MenuList/> : null}
                {windowWidth < 992 ?  <MobileMenu/>: null}
            </div>
        </Container>
    );
};