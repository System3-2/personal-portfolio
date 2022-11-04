import React from 'react';
import CV from '../../assets/cv.pdf';
import CV1 from '../../assets/cv1.pdf';



const Cta = () => {
  return (
    <div className='cta'>
      <a href={ CV1 } className='btn' download={CV}>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta
