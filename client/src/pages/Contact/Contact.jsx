import React,{useState} from 'react';
import axios from 'axios';
import SuccessIcon from '../../components/SuccessIcon/SuccessIcon';
import './Contact.scss'

function Contact() {
  const [emailSuccess, setEmailSuccess] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();
    const {name, email, topic, comments} = e.target;
    axios.post('http://localhost:8080/contact',{
      name: name.value,
      email: email.value,
      topic: topic.value,
      comments: comments.value
    }).then(res => {
      res.status === 200 ? setEmailSuccess(true):setEmailSuccess(false);
      if (res.status === 200){
        e.target.reset()
      }
    })
  }

  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
        <p className="contact__content">
          Should you have any feedback or questions that you would like to share,
          feel free to reach out using the form below.
        </p>
        {emailSuccess===true && <SuccessIcon/>}
        <form 
          className={`contact-form ${emailSuccess===true?'contact-form--success':''}`} 
          action="mainto:info@davidnugent.me"
          onSubmit={(e)=>sendEmail(e)}
        >
          <label className="contact-form__label" htmlFor="name">
            Name (Optional): 
          </label>
          <input 
            className="contact-form__field"
            type="text"
            name="name"
          />
          <label className="contact-form__label" htmlFor="email">
            Email:
          </label>
          <input 
            className="contact-form__field" 
            type="email" 
            name="email"
            required
          />
          <label className="contact-form__label" htmlFor="topic">
            Title/Topic:
          </label>
          <input 
            className="contact-form__field"
            type="text"
            name="topic"
            required
          />
          <label className="contact-form__label" htmlFor="comments">
            Comments:
          </label>
          <textarea 
            className="contact-form__field" 
            type="text"
            name="comments"
            required  
          />
          {emailSuccess===false && 
          <p className="contact-form__error">
            Error with submission
          </p>
          }
          <button className="contact-form__submit" type="submit">
            SUBMIT
          </button>
        </form>
    </section>
  )
}

export default Contact
