import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://t.co/oXKU6HHuuu">
        <BsLinkedin />
      </a>
      <a href="https://t.co/3quWR84tO6">
        <FaGithub />
      </a>
      <a href="https://twitter.com/iRedeploy__">
        <FaTwitter />
      </a>
      <a href="https://t.co/FLbTvMuQ5i">
        <FaFacebook />
      </a>
      <a href="https://t.co/FLbTvMuQ5i">
        <FaInstagram />
      </a>

      <a href="https://t.co/Ay1wQHMRV7">
        <SiLinktree />
      </a>
    </div>
  )
}

export default HeaderSocials
