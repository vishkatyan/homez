import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <form>

    <div className='form'>
        <div className='name'>
            <label>Your Name: </label>
            <input type="text" ></input>
        </div>
        <div className='email'>
            <label>Your Mail: </label>
            <input type="mail"></input>
        </div>
        <div className='message'>
            <label>Message: </label>
            <textarea cols="30" rows="10"></textarea>        
        </div>
        <div className='btn'>
            <button type="submit">Send Now</button>
        </div>
    </div>
    </form>

  )
}

export default ContactForm