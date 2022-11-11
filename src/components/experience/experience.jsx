import React from 'react';
import './experience.css';
// import { BsPatchCheckFill } from 'react-icons/bs';
import { SiTailwindcss, SiJavascript, SiMongodb, SiPhp } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaPython } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { GrNode, GrMysql } from 'react-icons/gr';

const Experience = () => {
  return <section id='experience'>
    <h5>Skills i have</h5>
    <h2>My Stacks</h2>

    <div className="container experience__container">


      <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <AiFillHtml5 />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <DiCss3 />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <SiJavascript />
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <FaReact />
              <h4>REACT</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="experience__details">
              <BsBootstrapFill />
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <SiTailwindcss />
              <h4>TAILWIND</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
      </div>

      <div className="experience__backend">

      <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <GrNode />
              <h4>NODE JS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <SiMongodb />
              <h4>Mongo DB</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experience__details">
              <SiPhp />
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className="experience__details">
              <GrMysql />
              <h4>MY SQL</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className="experience__details">
              <FaPython />
              <h4>PYTHON</h4>
              <small className='text-light'>Basic</small>
            </article>

          </div>
          </div>
      </div>
      </section>

}

export default Experience
