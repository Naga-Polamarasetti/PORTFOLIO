import React from 'react';
import './App.css';
import { Header } from './Components/Header/header';
import { Nav } from './Components/Navbar/Nav';
import { About } from "./Components/About/about"
import { Experience } from "./Components/Experience/Experience"


import { Footer } from './Components/footer/footer';
import { Contact } from "./Components/Contacts/contact";
import Portfolio from "./Components/Portfolio/portfolio"

function App() {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience />
      
      <Portfolio/>
      
      <Contact/>
      {/* <Footer/> */}
      
    </>
  );
}

export default App;
