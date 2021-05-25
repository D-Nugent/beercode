import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {NavLink,useRouteMatch} from 'react-router-dom';
import ExpandIcon from '../../assets/icons/expand-icon.svg';
import './SideNav.scss';

function SideNav({categories}) {
const [tutorials,setTutorials] = useState([]);
const match = useRouteMatch("/tutorials/:topic");
const topicName = match!==null ? match.params.topic:null;
const [activeTopic,setActiveTopic] = useState(topicName);

useEffect(() => {
  axios.get(`${process.env.REACT_APP_SERVER_URL}tutorials/alltutorials`)
  .then(res => {
    setTutorials(res.data)
  })
  .catch(err => {
    console.error('Error in receiving side nav details', err)
  })
}, [])

const toggleActiveTopic = (category) => {
  activeTopic===category?setActiveTopic(null):setActiveTopic(category);
}

  console.log(activeTopic)
  return (
    <nav className="side-nav">
      {categories.map(category => {
        const {categoryName,categoryId} = category;
        return(
          <React.Fragment key={categoryId}>
            <div 
              className={
                `side-nav__category 
                ${topicName===categoryName?'side-nav__category--active':''}`}
              onClick={()=>{toggleActiveTopic(categoryName)}}
            >
              <NavLink 
                className="side-nav__category-link"
                activeClassName="side-nav__category-link--active"
                to={`/tutorials/${categoryName}`} 
                >
                {categoryName}
              </NavLink>
              <svg 
                className={`side-nav__expand
                ${activeTopic===categoryName?'side-nav__expand--active':''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25.399999 25.400001"
              >
                <path
                  className={`side-nav__expand-left 
                  ${activeTopic===categoryName?'side-nav__expand-left--active':''}`}
                  fill="none"
                  stroke="#008080"
                  strokeWidth="2.58895"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  strokeDasharray="none"
                  strokeOpacity="1"
                  d="M 12.7,18.705334 22.754167,9.0375296"
                />
                <path
                  className={`side-nav__expand-right 
                  ${activeTopic===categoryName?'side-nav__expand-right--active':''}`}
                  fill="none"
                  stroke="#008080"
                  strokeWidth="2.58895"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  strokeDasharray="none"
                  strokeOpacity="1"
                  d="M 12.7,18.705334 2.6458333,9.0376375"
                />
              </svg>
            </div>
            <div 
            className={
              `side-nav__tutorial-wrapper
              ${activeTopic===categoryName?'side-nav__tutorial-wrapper--active'
              :
              'side-nav__tutorial-wrapper--inactive'}`}
            >
            {tutorials.filter(tutorial => tutorial.categoryId === categoryId).map((tutorial,i) => {
              const {tutorialName,tutorialId} = tutorial;
              return(
                <NavLink 
                className="side-nav__tutorial-link"
                activeClassName="side-nav__tutorial-link--active"
                to={`/tutorials/${categoryName}/${tutorialId}`}
                key={tutorialId}
                >
                  <p className="side-nav__tutorial-num">
                    {i>=9?i+1:`0${i+1}`}
                  </p>
                  {tutorialName}
                </NavLink>
              )
            })
          }
          </div>
          </React.Fragment>
        )
      })}
    </nav>
  )
}

export default SideNav
