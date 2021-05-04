import React from 'react';
import InlineNav from '../../components/InlineNav/InlineNav';
import './Home.scss'

function Home({tutorialData}) {
  return (
    <main className="home">
      <h2 className="home__welcome">Welcome,</h2>
      <p className="home__content">
        Created by David Nugent, a developer based in British Columbia, Canada. Beercode
        seeks to provide free web development tutorials on a variety of topics and 
        frameworks with a focus on javascript. The tutorials are intended to be
        accessible for complete beginners and have a laid back approach.
      </p>
      <p className="home__content">
        Should you have any questions about the content or if you would like 
        to request tutorials on any specific content please feel free to 
        contact David through the 'Contact' page.
      </p>
      <p className="home__content">
        Otherwise, crack a cold one, get comfortable and click on one of the links below to get started:
      </p>
      <InlineNav tutorialData={tutorialData}/>
      <p className="home__co">
        Happy Coding!
      </p>
    </main>
  )
}

export default Home
