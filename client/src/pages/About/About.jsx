import React from 'react';
import ProfileImage from '../../assets/images/profile.jpg';
import './About.scss';

function About() {
  return (
    <section className="about">
      <div className="about__content-wrapper">
        <div className="about__content-col">
          <h2 className="about__title">About</h2>
          <p className="about__content">
            BEERCODE was borne out of love of coding and mentorship.
          </p>
          <p className="about__content">
            It strives to make simple to complex web development concepts accessible to
            Junior Developers and those just starting out.   
          </p>
          <p className="about__content">
            Created and maintained (with love) by David Nugent, a developer based in 
            Brritish Columbia, Canada. The platform is in it's infancy currently but it
            is planned for a new video tutorial to be published every two weeks.
          </p>
        </div>
        <div className="about__content-col">
          <img className="about__profile-image" src={ProfileImage} alt="Creator" />
        </div>
      </div>
    </section>
  )
}

export default About
