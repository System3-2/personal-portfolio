import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return <section id='services'>
    <h5>What i offer</h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className="service">
        <div className="service__head">
          <h3>FRONTEND DEVELOPMENT</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon' />
            <p>User interface and user experience design</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Web page optimization for speed and performance</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Responsive and mobile-friendly web design</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Integration with back-end systems and APIs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Website maintenance and updates</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Cross-browser compatibility testing</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>BACKEND DEVELOPMENT</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon' />
            <p>Database management and optimization</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>API development and integration</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>User authentication and authorization</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Email and messaging services</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Content management and administration</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Integration with third-party services and platforms (e.g. social media, CRM, etc.)</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Cloud hosting and infrastructure management</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>TECHNICAL WRITING</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon' />
            <p>Technical documentation - creating user manuals, installation guides, and technical documentation for products or software.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Technical training - providing training materials, tutorials, and instructional videos for software or products.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Technical writing for website content - creating product descriptions, FAQs, and support articles for a company's website.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Technical editing - reviewing and revising technical documents for accuracy, clarity, and readability.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
}

export default Services