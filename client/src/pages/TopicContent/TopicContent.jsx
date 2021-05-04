import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import './TopicContent.scss';

function TopicContent({tutorialData}) {
  let params = useParams();
  const [selectedTutorial,setSelectedTutorial] = useState({loaded: false,tutorialDetails:{}})

console.log(selectedTutorial);
  useEffect(() => {
    let topic = tutorialData.find(topic => topic.topicName===params.topic) || []
    setSelectedTutorial({
      loaded: true,
      tutorialDetails: topic.tutorials.find(tutorial => tutorial.videoId===params.topicId) || []
    })
  }, [params,tutorialData])

  return (
    <section className="topic-content">
      <Link className="topic-content__back-link"
        to={`/tutorials/${params.topic}`}
      >
        Go Back
      </Link>
      {selectedTutorial.loaded===true &&
      <>
        <h2 className="topic-content__title">
          {selectedTutorial.tutorialDetails.videoTitle}
        </h2>
        <video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" 
          className="topic-content__video-player"
          controls
        />
        <p className="topic-content__video-details">
          This is an example of the type of video details that you might have
          underneath a tutorial video. Here there will be a brief description
          of what the video covers and links to resources as needed.
        </p>
      </>
      }
    </section>
  )
}

export default TopicContent
