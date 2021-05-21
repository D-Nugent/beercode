import React from 'react';
import {Link} from 'react-router-dom';
import './TutorialCard.scss';

function TutorialCard({tutorial, indexPos}) {
  return (
    <Link 
      className="tutorial-card" 
      to={`/tutorials/${tutorial.categoryName}/${tutorial.tutorialId}`}
    >
    <p className="tutorial-card__number">
      {indexPos>=9?indexPos+1:`0${indexPos+1}`}
    </p>
    <div className="tutorial-card__details">
      <h4 className="tutorial-card__title">
        {tutorial.tutorialName}
      </h4>
      <p className="tutorial-card__desc"> 
        {tutorial.tutorialDescription}
      </p>
    </div>
  </Link>
  )
}

export default TutorialCard
