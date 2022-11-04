import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_apypkfe', 'template_ivl6cjc', form.current, 'q7mvp03NJjOYJUn-V')

    e.target.reset();
     
  };


  return <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">

      <div className="contact__options">


        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>EMAIL</h4>
          <h5>olojam4969@gmail.com</h5>
          <a href="mailto:olojam4969@gmail.com">
            Send a Message
          </a>
        </article>

        <article className="contact__option">
          <AiOutlinePhone className='contact__option-icon'/>
          <h4>Phone</h4>
          <h5>+234 912-(0028)-3718</h5>
        </article>

        <article className="contact__option">
          <FaTwitter className='contact__option-icon'/>
          <h4>EMAIL</h4>
          <h5>@iREDEPLOY__</h5>
        </article>


      </div>

      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="name" placeholder='Full Name'required/>
        <input type="email" name="email" id="email" placeholder='Enter Email'required/>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter a Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
}
 
export default Contact;