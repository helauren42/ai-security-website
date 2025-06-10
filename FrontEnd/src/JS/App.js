import { useState, useEffect } from 'react';
import '../CSS/App.css';
import { Navbar } from './Navbar';
import { Header } from './Header'
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';
import { Capabilities } from './Capabilities.js'
import { Brief } from './Brief';
import { Benefits } from './Benefits';

const StandardSep = () => {
  return (
    <section className='standard-sep' ></section>
  )
}

const RemSep = () => {
  return (
    <section className='rem-sep' ></section>
  )
}

function App() {
  const [mobileDisplay, setMobileDisplay] = useState(false)
  const [tabletDisplay, setTabletDisplay] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    console.log("resized screen width to: ", screenWidth)
    setMobileDisplay(screenWidth <= 400)
    setTabletDisplay(screenWidth <= 768)
  }, [screenWidth])
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  return (
    <div id="App">
      <Navbar screenWidth={screenWidth} tabletDisplay={tabletDisplay} />
      <Header />
      <RemSep />
      <StandardSep />
      <Brief />
      <RemSep />
      <RemSep />
      <RemSep />
      <StandardSep />
      <Capabilities />
      <RemSep />
      <RemSep />
      <StandardSep />
      <Benefits screenWidth={screenWidth} mobileDisplay={mobileDisplay} tabletDisplay={tabletDisplay} />
      <StandardSep />
      <CallToAction screenWidth={screenWidth} />
      <StandardSep />
      <Footer />
    </div >
  );
}

export default App;
