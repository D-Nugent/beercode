import React,{useState,useEffect} from 'react';
import InlineNav from '../../components/InlineNav/InlineNav';
import {useParams} from 'react-router-dom';
import TutorialList from '../../components/TutorialList/TutorialList';
import './TopicIntro.scss';

function TopicIntro({tutorialData}) {
  let params = useParams();
  const [selectedTopic,setSelectedTopic] = useState({loaded: false,topicDetails:{}})

  useEffect(() => {
    setSelectedTopic({
      loaded: true,
      topicDetails: tutorialData.find(topic => topic.topicName===params.topic)
    })
  }, [params,tutorialData])

  const {topicName, tutorials} = selectedTopic.topicDetails || {};
  return (
    <section className="topic-intro">
      {selectedTopic.loaded===true && 
        <>
        <InlineNav tutorialData={tutorialData}/>
        <h2 className="topic-intro__title">{topicName}</h2>
        <p className="topic-intro__content">
        This would be a paragraph which would give a very general overview on what
        the topic covers. For example for HTML is would talk about how the videos
        related to HTML are mostly for beginners and how the HTML makes up the basic
        structure of every webpage. The section below would generate the list of
        videos on file relating to this topic.
        </p>
        {!!tutorials &&
          <TutorialList tutorials={tutorials}/>
        }
      </>
      }
      </section>
      )
    }

export default TopicIntro
