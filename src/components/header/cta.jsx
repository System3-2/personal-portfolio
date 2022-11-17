import React from 'react';
//import CV from '../../assets/cv.pdf';
//import CV1 from '../../assets/cv1.pdf';
import CV2 from '../../assets/Resume.pdf';




const Cta = () => {
  return (
    <div className='cta'>
      <a href={ CV2 } className='btn' download={ CV2 }>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta
