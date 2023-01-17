import React from 'react';
import './portfolio.css';
import img7 from '../../assets/p7.png';
// import img1 from '../../assets/portfolio1.jpg';
// import img2 from '../../assets/portfolio2.jpg';
// import img3 from '../../assets/portfolio3.jpg';
// import img4 from '../../assets/portfolio4.jpg';
// import img5 from '../../assets/portfolio5.png';
// import img6 from '../../assets/portfolio6.jpg';
import img8 from '../../assets/portfolio8.png';
import img9 from '../../assets/portfolio9png.png';
import img10 from '../../assets/p10.png';
import img11 from '../../assets/p11.png';
import img12 from '../../assets/p12.png';
import img13 from '../../assets/p13.png';
import img14 from '../../assets/p14.png';
import img15 from '../../assets/p15.png';
import img16 from '../../assets/p16.png';
import img17 from '../../assets/p17.png';









const Portfolio = () => {
  return <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

      
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img7 } alt="" />
        </div>
        <h3>A Bootcamp landing page</h3>
        <div className="portfolio__item-cta">
        <a href="https://t.co/D8Mmm7Cvwk" className='btn'>Source code</a>
        <a href="https://t.co/ctwrvyCng7" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img8 } alt="" />
        </div>
        <h3>A todo app</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/react-project3" className='btn'>Source code</a>
        <a href="https://oloja-todo-list.netlify.app/" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img9 } alt="" />
        </div>
        <h3>Freecodecamp landing page</h3>
        <div className="portfolio__item-cta">
        <a href="https://codepen.io/Oloja_m/pen/Vwxaebv" className='btn'>Source code</a>
        <a href="https://codepen.io/Oloja_m/pen/Vwxaebv" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img10 } alt="" />
        </div>
        <h3>A collab Website</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/React--group" className='btn'>Source code</a>
        <a href="https://savannahsilica.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

        
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img11 } alt="" />
        </div>
        <h3>E-commerce Website</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/ecommerce.github.io" className='btn'>Source code</a>
        <a href="https://oloja-ecommerce-test.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img12 } alt="" />
        </div>
        <h3>React test</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/react-project3" className='btn'>Source code</a>
        <a href="https://oloja-stripe.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img13 } alt="" />
        </div>
        <h3>React Movie App</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/react-movie-app" className='btn'>Source code</a>
        <a href="https://oloja-movie-app.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img14 } alt="" />
        </div>
        <h3>Random Gihub Users</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/random-github-user-api" className='btn'>Source code</a>
        <a href="https://oloja-random-github.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img15 } alt="" />
        </div>
        <h3>Random users</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/random-user-api" className='btn'>Source code</a>
        <a href="https://oloja-random-user.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img16 } alt="" />
        </div>
        <h3>Random Quotes React</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/random-quotes-api" className='btn'>Source code</a>
        <a href="https://oloja-quotes-api.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ img17 } alt="" />
        </div>
        <h3>Sidebar Component</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/react-context" className='btn'>Source code</a>
        <a href="https://oloja-sidebar.netlify.app" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <h3>Open Source (LinkFree)</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/LinkFree" className='btn'>Source code</a>
        <a href="https://t.co/YHGPPe2yDl" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <h3>Open Source (awesome github profiles)</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/awesome-github-profiles" className='btn'>Source code</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <h3>Discord Bot</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/discord-bot" className='btn'>Source code</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <h3>Login/Signup System</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/Login-Signup" className='btn'>Source code</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <h3>Rest API</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/OlojaMuyiwa/php-restful-api" className='btn'>Source code</a>
        </div>
      </article>

    </div>
  </section>
}

export default Portfolio