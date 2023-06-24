/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { ListDestop } from "./styled";

export const MenuList = (props) => {
    const { closeMenu } = props;
    const [ activeLink, setActiveLink ] = useState("")
    const { t } = useTranslation();

    let screenSize = window.innerWidth

    const handleSetActive = (to) => {
        setActiveLink(to);
    }

   

    return (
        <>   
        {/* {openList && } */}
            <ListDestop>
                <li className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="home"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-80}
                    duration={800}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true); {screenSize < 992 && closeMenu()}}}
                    // closeMenu();
                    >{t ('navbarFirstLink')}</Link>
                </li>
                <li
                className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="about"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-71}
                    duration={800}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true);  {screenSize < 992 && closeMenu()}}}
                    >{t ('navbarSecundLink')}</Link>                      
                </li>
                <li
                className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="services"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-71}
                    duration={800}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true);  {screenSize < 992 && closeMenu()}}}
                    >{t ('navbarThirdLink')}</Link>                      
                </li>
                <li
                className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="resume"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-71}
                    duration={800}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true); {screenSize < 992 && closeMenu()}}}
                    >{t ('navbarFourthLink')}</Link>                     
                </li>
                <li className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="portfolio"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-71}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true); {screenSize < 992 && closeMenu()}}}
                    >{t ('navbarFivethLink')}</Link>                       
                </li>
                <li className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="references"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-71}
                    duration={800}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true); {screenSize < 992 && closeMenu()}}}
                    >{t ('navbarSixthLink')}</Link>
                </li>
                <li className='hoverTo'
                >
                    <Link 
                    activeClass="actived"
                    to="contact"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={-71}
                    duration={800}
                    onSetActive={handleSetActive}
                    onClick={(e)=> {e.preventDefault(); setActiveLink(true); {screenSize < 992 && closeMenu()}}}
                    >{t ('navbarSeventhLink')}</Link>
                </li>
            </ListDestop>
        </>
    );
}
                          
