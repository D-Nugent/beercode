import {Switch, Route, Redirect} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Home from './pages/Home/Home'
import TopicIntro from './pages/TopicIntro/TopicIntro'
import TopicContent from './pages/TopicContent/TopicContent'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import HeroHeader from './components/HeroHeader/HeroHeader'
import './App.scss';


function App() {
  const [tutorialData, setTutorialData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/tutorials')
    .then(res => {
      setTutorialData(res.data);
    })
  }, [])

  return (
    <div className="app">
      <HeroHeader/>
      <main className="top-level-wrapper">
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/home" render={(routeProps) => <
            Home {...routeProps} tutorialData={tutorialData}/>}
          />
          <Route exact path="/tutorials/:topic" render={(routeProps) => 
            <TopicIntro {...routeProps} tutorialData={tutorialData}/>}/>
          <Route path="/tutorials/:topic/:topicId" render={(routeProps) => 
            <TopicContent {...routeProps} tutorialData={tutorialData}/>}/>
          <Route path="/about" render={(routeProps) => <About {...routeProps}/>}/>
          <Route path="/contact" render={(routeProps) => <Contact {...routeProps}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
