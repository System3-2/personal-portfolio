import React from 'react';
import './testimonials.css';
import AV1 from '../../assets/avatar1.jpg';
import AV2 from '../../assets/avatar2.jpg';

import AV3 from '../../assets/avatar3.jpg';

import AV4 from '../../assets/avatar4.jpg';





const Testimonials = () => {
  return <section id='testimonials'>
    <h5>Reviews from clients</h5>
    <h2>Testimonials</h2>

    <div className="container testimonials__container">

      <article className="testimonial">
        <div className="client__avater">
          <img src={ AV1 } alt="person1" />
        </div>
        <h5 className='client__name'>Jenner O'Reilly</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi eligendi praesentium necessitatibus rem accusamus ea delectus unde, nihil exercitationem. Ipsam perspiciatis natus fugiat sint aliquid eum cum culpa pariatur?
          </small>
      </article>


      
      <article className="testimonial">
        <div className="client__avater">
          <img src={ AV2 } alt="person1" />
        </div>
        <h5 className='client__name'>John Doe</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi eligendi praesentium necessitatibus rem accusamus ea delectus unde, nihil exercitationem. Ipsam perspiciatis natus fugiat sint aliquid eum cum culpa pariatur?
          </small>
      </article>

      
      <article className="testimonial">
        <div className="client__avater">
          <img src={ AV3 } alt="person1" />
        </div>
        <h5 className='client__name'>Sam Smith</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi eligendi praesentium necessitatibus rem accusamus ea delectus unde, nihil exercitationem. Ipsam perspiciatis natus fugiat sint aliquid eum cum culpa pariatur?
          </small>
      </article>

      
      <article className="testimonial">
        <div className="client__avater">
          <img src={ AV4 } alt="person1" />
        </div>
        <h5 className='client__name'>Binta Jackson</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi eligendi praesentium necessitatibus rem accusamus ea delectus unde, nihil exercitationem. Ipsam perspiciatis natus fugiat sint aliquid eum cum culpa pariatur?
          </small>
      </article>


    </div>
  </section>
}

export default Testimonials
