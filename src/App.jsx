import { useState } from 'react'
import './style/App.css'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Seperator from './Seperator.jsx'

function App() {
  return(
    <div className='page'>
      <Header/>
      <Home/>
      <Seperator/>
      <Projects/>
      <Seperator/>
      <About/>
      <Seperator/>
      <Contact/>
    </div>
  );
}

export default App
