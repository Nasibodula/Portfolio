import React from 'react'
import Hero from '../components/hero.jsx';
import About from '../components/About.jsx';
import Achievements from '../components/Achievements.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Projects from '../components/Project.jsx';
import Contact from '../components/contact.jsx';

export default function Homepage() {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <Navbar/>
      < Hero/>
      <Achievements/>
      <About/>
      < Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
