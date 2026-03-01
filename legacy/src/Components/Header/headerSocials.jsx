import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"

const headerSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/pnaga15/" target="__blank"><BsLinkedin/></a>
          <a href="http://github.com/leadernaga" target="__blank"><FaGithub/></a>
          <a href="http://facebook.com" target="__blank"><FaFacebook/></a>
    </div>
  )
}

export default headerSocials