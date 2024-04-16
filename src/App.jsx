import React from "react";
import Intro from './components/intro';
import Contact from './components/contact';
import Footer from "./components/footer";
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';

function App() {

  return (
    <div className='max-w-5xl w-11/12 mx-auto '>
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
       </div>
  )
}

export default App
