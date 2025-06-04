import { useState, useEffect } from 'react';
import '../CSS/Navbar.css'

const ClassicMenu = () => {
  return (
    <ul className='nav-menu' id="nav-menu-classic">
      <li className="std-hover-active">Platform</li>
      <li className="std-hover-active">Faq</li>
      <li className="std-hover-active">Careers</li>
    </ul>
  )
}

const TabletMenu = () => {
  const [openMenu, setOpenMenu] = useState(true)
  useEffect(() => {
    console.log("openMenu: ", openMenu)
  }, [openMenu])
  return (
    <button className='nav-menu' id="nav-menu-tablet" onClick={() => setOpenMenu(true)}> Menu
      <ul id="dropdown-menu" >
        <li className="std-hover-active">Platform</li>
        <li className="std-hover-active">Faq</li>
        <li className="std-hover-active">Careers</li>
      </ul >
    </button >
  );
};

export const Navbar = ({ screenWidth, tabletDisplay }) => {
  return (
    <nav >
      <section id="navbar">
        <h1 id="nav-title" > Novatus</h1 >
        {tabletDisplay ? <TabletMenu /> : <ClassicMenu />}
        <button className='classic-btn std-hover-active' id="service-btn">Get in touch</button>
      </section>
    </nav >
  )
}
