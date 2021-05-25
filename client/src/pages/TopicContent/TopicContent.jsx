import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import ViewIcon from '../../assets/icons/view-icon.svg';
import LikeIcon from '../../assets/icons/like-icon.svg';
import LikedIcon from '../../assets/icons/liked-icon.svg';
import TutorialCard from '../../components/TutorialCard/TutorialCard';
import './TopicContent.scss';
import axios from 'axios';

function TopicContent() {
  let params = useParams();
  const [selectedTutorial,setSelectedTutorial] = useState({loaded: false,currentTutorial:{}})
  const [videoLiked,setVideoLiked] = useState(false);

  useEffect(() => {
    const getCurrentTutorial = axios.get(`${process.env.REACT_APP_SERVER_URL}tutorials/tutorial/${params.topicId}`)
    const getNextTutorials = axios.get(`${process.env.REACT_APP_SERVER_URL}tutorials/category/${params.topic}`)
    const incrementTutorialViews = axios.put(`${process.env.REACT_APP_SERVER_URL}tutorials/tutorial/${params.topicId}`)
    Promise.all([getCurrentTutorial,getNextTutorials,incrementTutorialViews]).then(res => {
      setSelectedTutorial({
        loaded: true,
        currentTutorial: res[0].data,
        nextTutorial: res[1].data.filter(tutorial => tutorial.tutorialId !== Number(params.topicId))
      })
    }).catch(err => {
      console.error(`Error with tutorial data retrieval`, err)
    })
  }, [params.topic,params.topicId,videoLiked])

  console.log(selectedTutorial);

  const toggleVideoLike = () => {
    if (videoLiked===false){
      axios.put(`${process.env.REACT_APP_SERVER_URL}tutorials/tutorial/${params.topicId}/likes`)
      .then(
        setVideoLiked(true)
      ).catch(err => {
        console.error('There was an error liking the video', err);
      })
    } else {
      axios.delete(`${process.env.REACT_APP_SERVER_URL}tutorials/tutorial/${params.topicId}/likes`)
      .then(
        setVideoLiked(false)
      ).catch(err => {
        console.error('There was an error unliking the video', err);
      })
    }
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
          {selectedTutorial.currentTutorial.tutorialName}
        </h2>
        <video src={selectedTutorial.currentTutorial.tutorialVideoURL} 
          className="topic-content__video-player"
          controls
        />
        <div className="topic-content__info">
          <p className="topic-content__views">
            <img src={ViewIcon} alt="views" className="topic-content__icon"/>
            {Number(selectedTutorial.currentTutorial.tutorialViews)===0?1:selectedTutorial.currentTutorial.tutorialViews}
          </p>
          <p className="topic-content__likes">
            <img 
              src={videoLiked===false?LikeIcon:LikedIcon}
              onClick={()=>{toggleVideoLike()}}
              alt="likes" 
              className={`topic-content__icon ${videoLiked===false?'':'topic-content__icon--liked'}`}
            />
            {selectedTutorial.currentTutorial.tutorialLikes}
          </p>
        </div>
        <p className="topic-content__video-details">
          {selectedTutorial.currentTutorial.tutorialDescription}
        </p>
        <a 
          className="topic-content__demo-link"
          href={selectedTutorial.currentTutorial.tutorialRepo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Review the Demo Code here
        </a>
        <h3 className="topic-content__subtitle">
          What's Next?
        </h3>
        {selectedTutorial.nextTutorial.length>0?
        selectedTutorial.nextTutorial.map((tutorial,i) => {
          return (
            <TutorialCard tutorial={tutorial} indexPos={i} key={tutorial.tutorialId}/>
            )
        } )
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
