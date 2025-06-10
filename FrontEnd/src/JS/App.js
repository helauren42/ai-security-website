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
  const [lastNavbarTimeout, setLastNavbarTimeout] = useState(null)
  const [scrollStatus, setScrollStatus] = useState(false)
  useEffect(() => {
    console.log("resized screen width to: ", screenWidth)
    setMobileDisplay(screenWidth <= 400)
    setTabletDisplay(screenWidth <= 768)
  }, [screenWidth])
  const hideNavbar = () => {
    console.log("hide navbar")
    const navbar = document.getElementById("navbar")
    navbar.style.display = "none"
    console.log("hidden")
  }
  const showNavbar = () => {
    console.log("show navbar")
    const navbar = document.getElementById("navbar")
    navbar.style.display = "flex"
    console.log("shown")
  }
  const handleScroll = () => {
    console.log("handleScroll")
    setScrollStatus(true)
    const navbar = document.getElementById("navbar")
    if (lastNavbarTimeout) {
      clearTimeout(lastNavbarTimeout)
      setLastNavbarTimeout(null)
    }
    navbar.style.display = "flex"
    const timeoutId = setTimeout(() => setScrollStatus(false), 500)
    setLastNavbarTimeout(timeoutId)
  }
  useEffect(() => {
    console.log("!!!!! changed scroll status: ", scrollStatus)
    const pos = window.scrollY;
    const height = document.getElementById("App").scrollHeight
    console.log("bar y pos: ", pos)
    console.log("height: ", height)
    if (scrollStatus == false && pos > height / 10)
      hideNavbar()
    else
      showNavbar()
  }, [scrollStatus])
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleResize)
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
