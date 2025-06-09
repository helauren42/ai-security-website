import { useState, useEffect } from 'react';
import '../CSS/App.css';
import { Navbar } from './Navbar';
import { Header } from './Header'
import { CallToAction } from './CallToAction';
import { Footer } from './Footer';
import { Capabilities } from './TripCardBlocks.js'
import { Brief } from './Brief';
import { Benefits } from './Benefits';

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
    console.log("changed tabletDisplay: ", tabletDisplay)
  }, [tabletDisplay])
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="App">
      <Navbar screenWidth={screenWidth} tabletDisplay={tabletDisplay} />
      <Header />
      <Brief />
      <Capabilities />
      <Benefits screenWidth={screenWidth} mobileDisplay={mobileDisplay} tabletDisplay={tabletDisplay} />
      <CallToAction />
      <Footer />
    </div >
  );
}

export default App;
