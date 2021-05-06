import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.scss';

function Menu() {
  const [menuActive,setMenuActive] = useState(false);

  const menuToggle = () => {
    menuActive===false?setMenuActive(true):setMenuActive(false);
  }

  return (
    <nav className={`top-nav ${menuActive===true?'top-nav--active':'top-nav--inactive'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 8.4666666 8.4666669"
        className={`menu ${menuActive===true?'menu--active':'menu--inactive'}`}
        onClick={()=>menuToggle()}
      >
        <rect
          fill="#ffffff"
          strokeWidth="0.264593"
          strokeLinecap="round"
          strokeLinejoin="round"
          paintOrder="stroke fill markers"
          className="menu__top"
          width="8.467"
          height="0.88581526"
          x="0.39687985"
          y="1.4552132" 
        />
        <rect
          fill="#ffffff"
          strokeWidth="0.264594"
          strokeLinecap="round"
          strokeLinejoin="round"
          paintOrder="stroke fill markers"
          className="menu__bottom"
          width="8.467"
          height="0.88581532"
          x="0.39688033"
          y="5.9531302" 
        />
        <rect
          fill="#ffffff"
          strokeWidth="0.264594"
          strokeLinecap="round"
          strokeLinejoin="round"
          paintOrder="stroke fill markers"
          className="menu__middle"
          width="8.467"
          height="0.88581538"
          x="0.39688033"
          y="3.7041719" 
        />
    </svg>
    <NavLink 
      className="top-nav__link"
      activeClassName="top-nav__link--active"
      to={`/home`}
    >
      Home
    </NavLink>
    <NavLink 
      className="top-nav__link"
      activeClassName="top-nav__link--active"
      to={`/tutorials/html`}
    >
      Tutorials
    </NavLink>
    <NavLink 
      className="top-nav__link"
      activeClassName="top-nav__link--active"
      to={`/about`}
    >
      About
    </NavLink>
    <NavLink 
      className="top-nav__link"
      activeClassName="top-nav__link--active"
      to={`/contact`}
    >
      Contact
    </NavLink>
   </nav>
  )
}

export default Menu
