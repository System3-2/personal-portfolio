import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
//import { FiUsers } from 'react-icons/fi';
import { AiOutlineTeam } from 'react-icons/ai';
import { VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <img src={ Me } alt="me" className='about__me-image'/>
      </div>

      <div className="about__content">
        <div className="about__cards">


          <article className="about__card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>Upskilling MERN Stack</small>
          </article>


          <article className="about__card">
            <AiOutlineTeam className='about_icon'/>
            <h5>Collaboration</h5>
            <small>Patnered in 5+ Projects</small>
          </article>


          <article className="about__card">
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>20+Completed Projects</small>
          </article>
        </div>

        <p>Throughout my career, I have had the opportunity to collaborate on a wide range of projects, working with a diverse group of individuals and organizations. I have experience in all stages of the project life cycle, from research and planning to development and implementation. My technical writing and editing skills have helped me to create clear, accurate and actionable documentation for both internal and external audiences. Currently, I am working on upskilling my development skills and I am particularly interested in MERN stack (MongoDB, Express.js, React.js, and Node.js) development. I am dedicated to staying up-to-date with the latest technologies and best practices in my field and I am excited about the opportunity to apply these new skills in my future projects.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
}
 
export default About;