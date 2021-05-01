import React from 'react';
import './Home.scss'

function Home() {
  return (
    <main className="home">
      <h2 className="home__welcome">Welcome to BEERCODE</h2>
      <p className="home__content">
        Created by David Nugent, a developer based in British Columbia, Canada. Beercode
        seeks to provide free web development tutorials on a variety of topics and 
        frameworks with a focus on javascript.
      </p>
      <p className="home__content">
        Should you have any questions about the content or if you would like to request 
        tutorials on any specific content please feel free to contact the team through the 
        'Contact' page.
      </p>
    </main>
  )
}

export default Home
