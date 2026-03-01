import React from 'react';
import CTA from './CTA';
import ME from "../../assets/MEE.png";
import HeaderSocials from "./headerSocials";
import "./header.css"

export const Header = () => {
  return (
      <header>
          <div className="container header__container">
              <h5>Hello I`m</h5>
              <h1>Naga Polamarasetti</h1>
              <h5 className="text-light">Fullstack Developer</h5>
              <CTA />
              <HeaderSocials/>

              <div className="me">
                  <img className="myimage" src={ME} alt="myimage" />
              </div>
              <a href="#contact" className="scroll__down" >Scroll Down</a>
          </div>
      </header>
  )
}
