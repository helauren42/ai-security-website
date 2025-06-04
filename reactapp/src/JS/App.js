import { useState, useEffect } from 'react';
import '../CSS/App.css';
import { Navbar } from './Navbar';
import { Header } from './Header'

function App() {
  const [tabletDisplay, setTabletDisplay] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    console.log("resized screen width to: ", screenWidth)
    setTabletDisplay(screenWidth < 768)
  })
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="App">
      <Navbar screenWidth={screenWidth} tabletDisplay={tabletDisplay} />
      <Header />
      <section className="section-container">
      </section>
      <footer></footer>
    </div >
  );
}

export default App;
