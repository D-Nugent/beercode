import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import ViewIcon from '../../assets/icons/view-icon.svg';
import LikeIcon from '../../assets/icons/like-icon.svg';
import LikedIcon from '../../assets/icons/liked-icon.svg';
import TutorialCard from '../../components/TutorialCard/TutorialCard';
import './TopicContent.scss';

function TopicContent({tutorialData}) {
  let params = useParams();
  const [selectedTutorial,setSelectedTutorial] = useState({loaded: false,currentTutorial:{}})
  const [videoLiked,setVideoLiked] = useState(false);

  useEffect(() => {
    let topic = tutorialData.find(topic => topic.topicName===params.topic) || [];
    let currentTutorial = topic.tutorials.find(tutorial => tutorial.videoId===params.topicId) || [];
    let currentVideoIndex = topic.tutorials.map(tutorial=>tutorial.videoId).indexOf(currentTutorial.videoId)
    setSelectedTutorial({
      loaded: true,
      currentTutorial: currentTutorial,
      currentVideoIndex: currentVideoIndex,
      nextTutorial: topic.tutorials[currentVideoIndex+1] || null
    })
  }, [params,tutorialData])
  console.log(selectedTutorial);

  const toggleVideoLike = () => {
    videoLiked===false?setVideoLiked(true):setVideoLiked(false);
  }

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
          {selectedTutorial.currentTutorial.videoTitle}
        </h2>
        <video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" 
          className="topic-content__video-player"
          controls
        />
        <div className="topic-content__info">
          <p className="topic-content__views">
            <img src={ViewIcon} alt="views" className="topic-content__icon"/>
            {selectedTutorial.currentTutorial.videoViews}
          </p>
          <p className="topic-content__likes">
            <img 
              src={videoLiked===false?LikeIcon:LikedIcon}
              onClick={()=>{toggleVideoLike()}}
              alt="likes" 
              className={`topic-content__icon ${videoLiked===false?'':'topic-content__icon--liked'}`}
            />
            {selectedTutorial.currentTutorial.videoLikes}
          </p>
        </div>
        <p className="topic-content__video-details">
          This is an example of the type of video details that you might have
          underneath a tutorial video. Here there will be a brief description
          of what the video covers and links to resources as needed.
        </p>
        <a 
          className="topic-content__demo-link"
          href="https://github.com/D-Nugent/beercode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Review the Demo Code here
        </a>
        <h3 className="topic-content__subtitle">
          What's Next?
        </h3>
        {selectedTutorial.nextTutorial!==null?
        <TutorialCard tutorial={selectedTutorial.nextTutorial} indexPos={selectedTutorial.currentVideoIndex+1}/>
        :
        <p className="topic-content__finished">
          Looks like you have finished all of the tutorials that we have
          on {params.topic} for now. Either come back later 
          or <Link to="/" className="topic-content__tutorials-link"> check 
          out some other tutorials.</Link>
        </p>
        }
      </>
      }
    </section>
  )
}

export default TopicContent
