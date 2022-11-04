import React, { Component } from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
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

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique facilis blanditiis unde? Aliquid nulla, pariatur eaque esse totam incidunt accusantium eius temporibus nesciunt cumque aspernatur facere. Non assumenda porro doloremque.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
}
 
export default About;