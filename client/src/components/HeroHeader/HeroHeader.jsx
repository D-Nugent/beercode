import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import BeerCodeLogo from '../../assets/logos/beercode.svg'
import BeerCodeLogov2 from '../../assets/logos/beercode-bottle.svg'
import './HeroHeader.scss';

function HeroHeader() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    window.scrollY >= 40 ? setScrolled(true): setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])
  
  return (
  <>
    <div className="header-padding"></div>
    <div className="logo-wrapper">
      {window.scrollY !==0 &&
      <Link to="/" className="logo-wrapper__link">
        <img src={BeerCodeLogo} 
          alt="Beer code barcode" 
          className={scrolled===true?'logo-wrapper__logo-code':'logo-wrapper__logo-code--inactive'}
        />
      </Link>
      }
      <Link to="/" className="logo-wrapper__link">
        <img src={BeerCodeLogov2} 
          alt="Beer code bottle" 
          className={scrolled===false?'logo-wrapper__logo-bottle':'logo-wrapper__logo-bottle--inactive'}
        />
      </Link>
    </div>
    <header className="hero-header">
    </header>
    <svg className="clip-control">
      <clipPath id="header-clip-path" clipPathUnits="objectBoundingBox">
        <path
        d="M0,0.00 H1 V0.851 c-0.333,0.203,-0.667,0.209,-1,0"/>
      </clipPath>
    </svg>
  </>
  )
}

export default HeroHeader
