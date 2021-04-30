import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home'
import TopicIntro from './pages/TopicIntro/TopicIntro'
import TopicContent from './pages/TopicContent/TopicContent'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import HeroHeader from './components/HeroHeader/HeroHeader'

function App() {
  return (
    <div className="app">
      <h1>BeerCode</h1>
      <HeroHeader/>
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route path="/home" render={(routeProps) => <Home {...routeProps}/>}/>
        <Route exact path="/tutorials/:topic" render={(routeProps) => <TopicIntro {...routeProps}/>}/>
        <Route path="/tutorials/:topic/:topicid" render={(routeProps) => <TopicContent {...routeProps}/>}/>
        <Route path="/about" render={(routeProps) => <About {...routeProps}/>}/>
        <Route path="/contact" render={(routeProps) => <Contact {...routeProps}/>}/>
      </Switch>
    </div>
  );
}

export default App;
