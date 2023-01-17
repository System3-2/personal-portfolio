import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Scrollbar } from 'swiper';
import { Scrollbar } from 'swiper';
import './testimonials.css';
import AV1 from '../../assets/avater5.jpeg';
import AV2 from '../../assets/avater6.jpeg';

import AV3 from '../../assets/avater8.jpeg';

import AV4 from '../../assets/avater7.jpeg';


import 'swiper/css';


const Testimonials = () => {
  return <section id='testimonials'>
    <h5>Reviews from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
      modules={[Scrollbar]}
      navigation
      spaceBetween={50}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide className="testimonial">
        <div className="client__avater">
          <img src={AV1} alt="person1" />
        </div>
        <h5 className='client__name'>Victor Olushegun</h5>
        <small className='client__review'>
          We recently worked with Mr Oloja on a complex technical documentation project for our new software product. Not only were they able to create clear and comprehensive documentation for our team, but they also helped us to understand the technical aspects of the project and provided valuable input on how to improve our product. They were a pleasure to work with and we would highly recommend them for any technical writing or editing project.
        </small>
      </SwiperSlide>



      <SwiperSlide className="testimonial">
        <div className="client__avater">
          <img src={AV2} alt="person1" />
        </div>
        <h5 className='client__name'>Daramola Ojo</h5>
        <small className='client__review'>
          I had the pleasure of working with Mr Oloja on a technical training project for our new employees. They created excellent instructional materials and tutorials that helped our employees quickly understand and use our software. They were also very responsive to our feedback and made sure that everything was tailored to our specific needs. We are extremely pleased with the end result and would not hesitate to recommend Mr Oloja
        </small>
      </SwiperSlide>


      <SwiperSlide className="testimonial">
        <div className="client__avater">
          <img src={AV3} alt="person1" />
        </div>
        <h5 className='client__name'>Timilehin Miles</h5>
        <small className='client__review'>
          I needed help with a white paper for a scientific conference and Mr Oloja was able to deliver it in a very short time. Not only that, but they also helped me to clarify my ideas and made sure that the final product was well-organized and easy to read. They were able to understand the technical details of my research and communicate them effectively to a broader audience. I highly recommend Mr Oloja for any technical writing project
        </small>
      </SwiperSlide>


      <SwiperSlide className="testimonial">
        <div className="client__avater">
          <img src={AV4} alt="person1" />
        </div>
        <h5 className='client__name'>Deborah Oluwatoyin</h5>
        <small className='client__review'>
          I needed help with the legal documentation for my patent application, and Mr Oloja was able to guide me through the process and make sure that everything was in order. They were very knowledgeable about the legal requirements and made sure that all the necessary information was included. They were also very patient and responsive to my questions, which made the process much less stressful. I would definitely recommend Mr Oloja for any legal technical writing project.
        </small>
      </SwiperSlide>


    </Swiper>
  </section>
}

export default Testimonials
