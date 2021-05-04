import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './TutorialCards.scss';

function TutorialCards({tutorials}) {
  let location = useLocation();
  return (
    <section className="tutorial-cards">
      <h3 className="tutorial-cards__title">
        Tutorials:
      </h3>
      <p className="tutorial-cards__content">
        Number of tutorials: {tutorials.length}
      </p>
      {tutorials.map((tutorial,i) => {
        return (
          <Link 
            className="tutorial-card" 
            to={`${location.pathname}/${tutorial.videoId}`}
            key={tutorial.videoId}
          >
            <p className="tutorial-card__number">
              {i>=9?i+1:`0${i+1}`}
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
      })}
    </section>
  )
}

export default TutorialCards
