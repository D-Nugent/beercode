import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './TutorialCard.scss';

function TutorialCard({tutorial, indexPos}) {
  const params = useParams();
  return (
    <Link 
      className="tutorial-card" 
      to={`/tutorials/${params.topic}/${tutorial.videoId}`}
    >
    <p className="tutorial-card__number">
      {indexPos>=9?indexPos+1:`0${indexPos+1}`}
    </p>
    <div className="tutorial-card__details">
      <h4 className="tutorial-card__title">
        {tutorial.videoTitle}
      </h4>
      <p className="tutorial-card__desc">
        {tutorial.videoSrc}
      </p>
    </div>
  </Link>
  )
}

export default TutorialCard
