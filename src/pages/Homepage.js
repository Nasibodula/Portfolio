import React from 'react'
import Hero from '../components/hero.jsx';
import About from '../components/About.jsx';
import Achievements from '../components/Achievements.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Projects from '../components/Project.jsx';

export default function Homepage() {
  return (
    <div className='Home'>
      <Navbar/>
      < Hero/>
      <Achievements/>
      <About/>
      < Projects/>
      <Footer/>
    </div>
  )
}
