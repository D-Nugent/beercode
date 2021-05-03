import React from 'react';
import {Link} from 'react-router-dom';
import './InlineNav.scss';

function InlineNav({tutorialData}) {
  console.log(tutorialData);
  return (
    <nav className="inline-nav">
      <h3 className="inline-nav__title">Tutorial Topics:</h3>
      {tutorialData.map(topic => {
        const {topicName,topicId} = topic;
        return(
          <Link 
          className="inline-nav__link"
          to={`/tutorials/${topicName}`} 
          key={topicId}>
            {topicName}
          </Link>
        )
      })}
    </nav>
  )
}

export default InlineNav
