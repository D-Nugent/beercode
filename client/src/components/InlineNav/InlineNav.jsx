import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './InlineNav.scss';

function InlineNav() {
  const [tutorialData,setTutorialData] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}tutorials`)
    .then(res => {
      setTutorialData(res.data)
    })
  }, [])

  return (
    <nav className="inline-nav">
      {tutorialData.map(category => {
        const {categoryName,categoryId} = category;
        return(
          <NavLink 
          className="inline-nav__link"
          activeClassName="inline-nav__link--active"
          to={`/tutorials/${categoryName}`} 
          key={categoryId}>
            {categoryName}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default InlineNav
