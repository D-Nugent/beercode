import React from 'react';
import TutorialCard from '../TutorialCard/TutorialCard';
import './TutorialList.scss';

function TutorialList({tutorials}) {
  return (
    <section className="tutorial-list">
      <h3 className="tutorial-list__title">
        Tutorials:
      </h3>
      <p className="tutorial-list__content">
        Number of tutorials: {tutorials.length}
      </p>
      {tutorials.map((tutorial,i) => {
        return (
          <TutorialCard tutorial={tutorial} indexPos={i} key={tutorial.tutorialId}/>
        )
      })}
    </section>
  )
}

export default TutorialList
