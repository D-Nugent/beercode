import React,{useState,useEffect} from 'react';
import InlineNav from '../../components/InlineNav/InlineNav';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import TutorialList from '../../components/TutorialList/TutorialList';
import './TopicIntro.scss';

function TopicIntro() {
  let params = useParams();
  const [selectedTopic,setSelectedTopic] = useState({
    loaded: false,
    topicDetails:{},
    topicTutorials:[],
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}tutorials/${params.topic}`)
    .then(res => {
      const {categoryName,categoryDescription} = res.data[0]
      setSelectedTopic({
        loaded: true,
        topicDetails: {
          categoryName:categoryName,
          categoryDescription: categoryDescription
        },
        topicTutorials: res.data
      })
    })
  }, [params.topic])

  console.log(selectedTopic);

  return (
    <section className="topic-intro">
      {selectedTopic.loaded===true && 
        <>
        <InlineNav/>
        <h2 className="topic-intro__title">{selectedTopic.topicDetails.categoryName}</h2>
        <p className="topic-intro__content">
          {selectedTopic.topicDetails.categoryDescription}
        </p>
        {!!selectedTopic.topicTutorials[0].tutorialName &&
          <TutorialList tutorials={selectedTopic.topicTutorials}/>
        }
      </>
      }
      </section>
      )
    }

export default TopicIntro
