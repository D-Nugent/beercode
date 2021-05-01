import React from 'react';
import BeerCodeLogo from '../../assets/logos/beercode.svg'
import BeerCodeLogov2 from '../../assets/logos/beercode-v2.png'
import './HeroHeader.scss';

function HeroHeader() {
  return (
    <header className="hero-header">
      <img src={BeerCodeLogo} alt="Beer code" className="hero-header__logo"/>
      {/* <img src={BeerCodeLogov2} alt="Beer code" className="hero-header__logo-v2"/> */}
    </header>
  )
}

export default HeroHeader
