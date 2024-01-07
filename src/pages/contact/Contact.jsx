import contactCss from "./Contact.module.css"
import Button from "../../compontents/Button/Button"
import { useState } from "react"
import { sendMessage } from "../../util/api"
import { useNavigate } from "react-router-dom"


export default function Contact () {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  
  const submitForm = async (e) => {
    e.preventDefault()
  
    await sendMessage(name, subject, email, message)

    navigate("/")
  }

  return (
    <section className={contactCss.contactSection}>
      <h1>Contact Us</h1>
      <form action="post" className={contactCss.contactForm} id="messageForm" onSubmit={submitForm}>
        <div className={`${contactCss.contactName} ${contactCss.input}`}>
          <label htmlFor="fullName">Full Name</label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="fullName"
            required
            minLength="3"
          />
        </div>
        <div className={`${contactCss.contactEmail} ${contactCss.input}`}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="emailAddress"
            id="emailAddress"
            required
          />
        </div>
        <div className={`${contactCss.contactSubject} ${contactCss.input}`}>
          <label htmlFor="subject">Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            name="subject"
            id="subject"
            required
            minLength="3"
          />
        </div>
        <div className={`${contactCss.contactMessage} ${contactCss.input}`}>
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            required
            minLength="3"
          ></textarea>
        </div>
        <Button className={contactCss.contactBtn} type={"submit"}>Send Message</Button>
      </form>
    </section>
  )
}