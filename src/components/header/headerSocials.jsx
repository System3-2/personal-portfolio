import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://t.co/oXKU6HHuuu" target='_blank'>
        <BsLinkedin />
      </a>
      <a href="https://t.co/3quWR84tO6" target='_blank'>
        <FaGithub />
      </a>
      <a href="https://twitter.com/iRedeploy__" target='_blank'>
        <FaTwitter />
      </a>
      <a href="https://t.co/FLbTvMuQ5i" target='_blank'>
        <FaFacebook />
      </a>
      <a href="" target='_blank'>
        <FaInstagram />
      </a>

      <a href="https://t.co/Ay1wQHMRV7" target='_blank'>
        <SiLinktree />
      </a>
    </div>
  )
}

export default HeaderSocials
