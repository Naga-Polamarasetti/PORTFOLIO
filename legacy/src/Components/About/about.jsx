import React from 'react'
import "./about.css";
import ME from "../../assets/MEEbg1.png";
import { FaAward,FaGraduationCap } from "react-icons/fa"
import { FiUsers } from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="myimg" src={ME}  alt="myAboutIMG"/>
         </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>

            </article>
             <article className="about__card">
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>Btech Mechanical</small>

            </article>
             <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>

            </article>
          </div>
          <p>Strong in design and in intuitive problem-solving skills. Proficient in MERN STACK. Passionate about implementing and launching new projects. Looking to start the career as an entry-level software developer with a reputed firm driven by technology.</p>
          <a href="#contact" className="btn btn-primary" >Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}
