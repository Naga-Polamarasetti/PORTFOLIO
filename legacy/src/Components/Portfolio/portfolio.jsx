import React from 'react'
import './portfolio.css'
import BigBasket from '../../assets/BigBasket.png'
import Beardo from '../../assets/BeardoProduct.png'
import Apollo from '../../assets/ApolloNew.png'
import sugarCosmetics from '../../assets/sugarCosmetics.png'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/light.css'

const Portfolio = () => {
  // tippy('#p0', {
  //   content: 'Buid with : React Redux JavaScript CSS Material UI React Icons',
  //   animation: 'scale',
  //   theme: 'light',
  // })
  // tippy('#p1', {
  //   content: 'Buid with :JavaScript HTNL CSS LocalStorage',
  //   animation: 'scale',
  //   theme: 'light',
  // })
  // tippy('#p0', {
  //   content: 'Buid with : React Redux JavaScript LocalStorage',
  //   animation: 'scale',
  //   theme: 'light',
  // })

  const arr = [
    {
      img: Beardo,
      title: 'Beardo Clone',
      Github: 'https://github.com/leadernaga/Beardo.in',
      Live: 'https://beardoclone.netlify.app/',
      description:
        'An e-commerce website for the complete range of Men grooming products for your hair, beard, mustache, skin & face.',
      Tech: ['Javascript', 'CSS', 'HTML'],
    },
    {
      img: sugarCosmetics,
      title: 'Sugar Cosmetics Clone',
      Github: 'https://github.com/leadernaga/tart-clover-129',
      Live: 'https://sugar-cosmetics.vercel.app/',
      description:
        "Welcome to SUGAR Cosmetics. A brand of choice for the women of today! And we're here to ensure you have a lot of fun with our makeup",
      Tech: [
        'CSS',
        'React JS',
        'Express JS',
        'Node JS',
        'MongoDB',
        'JWT',
        'Stripe Payments',
        'Tailwind CSS',
        'MUI',
      ],
    },
    {
      img: BigBasket,
      title: 'Big Basket Clone',
      Github: 'https://github.com/S-hub1996/Big-basket-clone',
      Live: 'https://big-basket-clone-by-masai-school.netlify.app/',
      description:
        'BigBasket is an online food and grocery store that delivers personal and household needs right to customers doorstep.',
      Tech: ['React', 'Redux', 'JavaScript', 'CSS'],
    },

    {
      img: Apollo,
      title: 'Apollo Clone',
      Github: 'http://github.com/leadernaga/Apollo247',
      Live: 'https://apollo24by7.netlify.app/',
      description: 'Apollo 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home.',
      Tech: ['JavaScript', 'CSS', 'HTML'],
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {arr.map((elm, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div id={`p${index}`} className="portfolio__item-image">
                <img src={elm.img} alt="bigbasket" />
              </div>
              <h3>{elm.title}</h3>
              <div>
                {' '}
                <p
                  style={{
                    fontWeight: 800,
                    borderBottom: '1px solid white',
                    paddingBottom: '2px',
                    width: 'fit-content',
                  }}
                >
                  Summary{' '}
                </p>{' '}
                <p>{elm.description}</p>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 800,
                    margin: 'auto',
                    display: 'flex',
                    margin: '10px 0px',
                    borderBottom: '1px solid white',
                    paddingBottom: '2px',
                    width: 'fit-content',
                  }}
                >
                  Tech Stack
                </p>
                <div className="techStack">
                  {elm.Tech &&
                    elm.Tech.map((el, index) => (
                      <p className="btn tech">{el}</p>
                    ))}
                </div>
              </div>
              <div className="portfolio__item-cta">
                <a href={elm.Github} className="btn" target="__blank">
                  Github
                </a>
                <a href={elm.Live} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio

{
  /* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Beardo} alt="bigbasket" />
          </div>
          <h3>Beardo</h3>
          <div className="portfolio__item-cta">
                  <a href="https://github.com/leadernaga/Beardo.in" className='btn' target="__blank">Github</a>
          <a href="https://https://beardoclone.netlify.app/" className='btn btn-primary' target="__blank">Live Demo</a>
    </div>

        </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Apollo} alt="bigbasket" />
          </div>
          <h3>Apollo</h3>
          <div className='portfolio__item-cta'>
              <a href="http://github.com/leadernaga/Apollo247" className='btn' target="__blank">Github</a>
          <a href="https://apollo24by7.netlify.app/" className='btn btn-primary' target="__blank">Live Demo</a>
        </div>

        </article> */
}
