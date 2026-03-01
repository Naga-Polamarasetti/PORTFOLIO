import React, { useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

import { RiServiceLine } from 'react-icons/ri'
import { BiBrain } from 'react-icons/bi'
import { MdOutlineContactPage } from 'react-icons/md'

import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/light.css'

export const Nav = () => {
  const [state, setState] = useState('#')
  useEffect(() => {
    tippy('#hm', {
      content: 'home',
      animation: 'scale',
      theme: 'light',
    })
    tippy('#ab', {
      content: 'about',
      animation: 'scale',
      theme: 'light',
    })
    tippy('#exp', {
      content: 'skills',
      animation: 'scale',
      theme: 'light',
    })
    tippy('#prj', {
      content: 'projects',
      animation: 'scale',
      theme: 'light',
    })
    tippy('#cntct', {
      content: 'contact',
      animation: 'scale',
      theme: 'light',
    })
  }, [])

  return (
    <div className="nav">
      <a
        id="hm"
        href="#"
        onClick={() => setState('#')}
        className={state === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a
        id="ab"
        href="#about"
        onClick={() => setState('about')}
        className={state === 'about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        id="exp"
        href="#experience"
        onClick={() => setState('experience')}
        className={state === 'experience' ? 'active' : ''}
      >
        <BiBrain />
      </a>

      <a
        id="prj"
        href="#portfolio"
        onClick={() => setState('services')}
        className={state === 'services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        id="cntct"
        href="#contact"
        onClick={() => setState('contact')}
        className={state === 'contact' ? 'active' : ''}
      >
        <MdOutlineContactPage />
      </a>
    </div>
  )
}
