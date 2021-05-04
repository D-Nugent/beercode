import React from 'react';
import {NavLink} from 'react-router-dom';
import './InlineNav.scss';

function InlineNav({tutorialData}) {
  return (
    <nav className="inline-nav">
      {tutorialData.map(topic => {
        const {topicName,topicId} = topic;
        return(
          <NavLink 
          className="inline-nav__link"
          activeClassName="inline-nav__link--active"
          to={`/tutorials/${topicName}`} 
          key={topicId}>
            {topicName}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default InlineNav
